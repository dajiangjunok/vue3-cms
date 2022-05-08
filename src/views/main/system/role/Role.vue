<template>
  <div class="role">
    <div class="content">
      <pageContent pageName="role" :contentTableConfig="contentTableConfig">
        <!-- <template #operate="{ row }"> {{ row.id }} </template> -->
      </pageContent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'Role',
  components: {
    pageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
