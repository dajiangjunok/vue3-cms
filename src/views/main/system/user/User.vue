<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" @onSearch="onSearch" />
    <div class="content">
      <PageContent
        ref="pageContentRef"
        pageName="users"
        :contentTableConfig="contentTableConfig"
        @onAdd="onAdd"
        @onEdit="onEdit"
      />
    </div>
    <PageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalFormConfig="modalFormConfig"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config' //form配置项
import { contentTableConfig } from './config/content.config'
import { modalFormConfig } from './config/modal.config'

//hooks
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

export default defineComponent({
  name: 'User',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const { pageContentRef, onSearch } = usePageSearch()
    const { pageModalRef, defaultInfo, onAdd, onEdit } = usePageModal()

    return {
      searchFormConfig,
      contentTableConfig,
      modalFormConfig,
      defaultInfo,
      pageContentRef,
      pageModalRef,
      onSearch,
      onAdd,
      onEdit
    }
  }
})
</script>

<style scoped lang="less">
.user > .content {
  border-top: 10px solid #f5f5f5;
}
</style>
