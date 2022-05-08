<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">
      <PageContent pageName="users" :contentTableConfig="contentTableConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search/index'
import PageContent from '@/components/page-content/index'

import { searchFormConfig } from './config/search.config' //form配置项
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'User',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped lang="less">
.user > .content {
  border-top: 10px solid #f5f5f5;
}
</style>
