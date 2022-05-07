<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">
      <YJTable
        title="用户管理"
        :tableList="userList"
        :propList="userPropList"
        :otherProps="{ stripe: true }"
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
        <template #operate>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </YJTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import PageSearch from '@/components/page-search/src/PageSearch.vue'
import YJTable from '@/base-ui/table'

import { searchFormConfig } from './config/search.config' //form配置项

export default defineComponent({
  name: 'User',
  components: {
    PageSearch,
    YJTable
  },
  setup() {
    const store = useStore()

    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => {
      return store.state.system.userList
    })

    const userPropList: any[] = [
      // {
      //   label: 'id',
      //   prop: 'id'
      // },
      {
        label: '用户名',
        prop: 'name'
      },
      {
        label: '真实姓名',
        prop: 'realname'
      },
      {
        label: '手机号',
        prop: 'cellphone'
      },
      {
        label: '状态',
        prop: 'enable',
        slotName: 'enable',
        width: 80
      },
      {
        label: '创建时间',
        prop: 'createAt',
        slotName: 'createAt'
      },
      {
        label: '更新时间',
        prop: 'updateAt',
        slotName: 'updateAt'
      },
      {
        label: '操作',
        slotName: 'operate',
        width: 80
      }
    ]

    return {
      searchFormConfig,
      userList,
      userPropList
    }
  }
})
</script>

<style scoped lang="less">
.user > .content {
  border-top: 10px solid #f5f5f5;
}
</style>
