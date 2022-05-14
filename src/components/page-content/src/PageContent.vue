<template>
  <div class="page-content">
    <YJTable
      :tableList="list"
      :total="total"
      :otherProps="{ stripe: true }"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button size="small" type="primary">新建用户</el-button>
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
import { useStore } from '@/store'
import YJTable from '@/base-ui/table'

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

    // 1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    function getPageData(userInfo: any = {}) {
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
        if (item.slotName === 'headerHandler') return false
        if (item.slotName === 'enable') return false
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false

        return true
      }
    )

    return {
      list,
      total,
      pageInfo,
      otherPropSlots,
      getPageData
    }
  }
})
</script>

<style scoped lang="less"></style>
