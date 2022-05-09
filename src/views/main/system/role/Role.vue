<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">
      <pageContent pageName="role" :contentTableConfig="contentTableConfig">
        <!-- <template #operate="{ row }"> {{ row.id }} </template> -->
      </pageContent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config' //form配置项
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'Role',
  components: {
    PageSearch,
    pageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
