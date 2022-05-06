<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">
      <YJTable :tableList="userList" :propList="userPropList" />
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

    const userPropList = [
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
        prop: 'enable'
      },
      {
        label: '创建时间',
        prop: 'createAt'
      },
      {
        label: '更新时间',
        prop: 'updateAt'
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
