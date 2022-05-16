<template>
  <div class="page-content">
    <YJTable
      :tableList="list"
      :total="total"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button size="small" type="primary" v-if="isCreate"
          >新建用户</el-button
        >
      </template>
      <template #enable="{ row }">
        <el-tag :type="row.enable == 1 ? 'success' : 'warning'">{{
          row.enable == 1 ? '已启用' : '已禁用'
        }}</el-tag>
      </template>
      <template #status="{ row }">
        <el-tag :type="row.status == 1 ? 'success' : 'warning'">{{
          row.status == 1 ? '已启用' : '已禁用'
        }}</el-tag>
      </template>
      <template #createAt="{ row }">
        {{ String(row.createAt).substring(0, 10) }}
      </template>
      <template #updateAt="{ row }">
        {{ String(row.updateAt).substring(0, 10) }}
      </template>
      <template #operate="{ row }">
        <div class="handle-btns">
          <el-button
            v-if="isUpdate"
            size="small"
            type="text"
            @click="onEdit(row)"
            >编辑</el-button
          >
          <el-button
            @click="onDelete(row)"
            v-if="isDelete"
            size="small"
            type="text"
            >删除</el-button
          >
        </div>
      </template>
      <template
        v-for="item in otherPropSlots"
        :key="item.label"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </YJTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref, watch } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useStore } from '@/store'
import YJTable from '@/base-ui/table'
import { usePermission } from '@/hooks/use-permission'

export default defineComponent({
  name: 'page-content',
  props: {
    pageName: {
      type: String,
      default: ''
    },
    contentTableConfig: {
      type: Object as PropType<any>,
      required: true
    }
  },
  components: {
    YJTable
  },
  setup(props) {
    const store = useStore()

    // 0.获取操作的权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    // 1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    function getPageData(userInfo: any = {}) {
      if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...userInfo
        }
      })
    }
    // 2.发送请求获取数据
    getPageData()

    // 3.从vuex中获取数据
    const list = computed(() => {
      return store.getters[`system/pageListData`](props.pageName)
    })
    const total = computed(() => {
      return store.getters[`system/pageListCount`](props.pageName)
    })

    // 4.获取其他动态插槽名称
    const otherPropSlots = props.contentTableConfig.propList.filter(
      (item: any) => {
        switch (item.slotName) {
          case 'headerHandler':
          case 'enable':
          case 'status':
          case 'createAt':
          case 'updateAt':
          case 'operate':
            return false
          default:
            return true
        }
      }
    )

    // 5.删除/编辑/新增
    const onDelete = async (row: any) => {
      try {
        await ElMessageBox.confirm(
          '此操作将永久删除该用户, 是否继续?',
          'Warning',
          {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }
        )
        await store.dispatch('system/deletePageData', {
          id: row.id,
          pageName: props.pageName,
          pageInfo: {
            offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
            size: pageInfo.value.pageSize
          }
        })

        ElMessage({
          type: 'success',
          message: 'Delete completed'
        })
      } catch (error) {
        ElMessage({
          type: 'info',
          message: 'Delete canceled'
        })
      }
    }

    const onEdit = (row: any) => {
      console.log(row)
    }

    return {
      list,
      total,
      pageInfo,
      otherPropSlots,
      getPageData,
      isCreate,
      isUpdate,
      isDelete,
      isQuery,
      onDelete,
      onEdit
    }
  }
})
</script>

<style scoped lang="less"></style>
