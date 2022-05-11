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
      <template #createAt="{ row }">
        {{ String(row.createAt).substring(0, 10) }}
      </template>
      <template #updateAt="{ row }">
        {{ String(row.updateAt).substring(0, 10) }}
      </template>
      <template #operate="{ row }">
        <slot name="operate" :row="row">
          <el-button size="small" type="danger">删除</el-button>
        </slot>
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
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    function getPageData(userInfo: any = {}) {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...userInfo
        }
      })
    }

    getPageData()

    const list = computed(() => {
      return store.getters[`system/pageListData`](props.pageName)
    })

    const total = computed(() => {
      return store.getters[`system/pageListCount`](props.pageName)
    })

    return {
      list,
      total,
      pageInfo,
      getPageData
    }
  }
})
</script>

<style scoped lang="less"></style>
