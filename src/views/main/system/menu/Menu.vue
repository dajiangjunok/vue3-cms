<template>
  <div class="menu">
    <PageContent pageName="menu" :contentTableConfig="contentTableConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contentTableConfig } from './config/contentTableConfig'
import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'Menu',
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
