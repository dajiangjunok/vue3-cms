<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" @onSearch="handelSearch" />
    <div class="content">
      <PageContent
        ref="pageContentRef"
        pageName="users"
        :contentTableConfig="contentTableConfig"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config' //form配置项
import { contentTableConfig } from './config/content.config'

//hooks
import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'User',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const { pageContentRef, handelSearch } = usePageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handelSearch
    }
  }
})
</script>

<style scoped lang="less">
.user > .content {
  border-top: 10px solid #f5f5f5;
}
</style>
