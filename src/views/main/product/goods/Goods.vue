<template>
  <div class="goods">
    <PageContent :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="{ row }">
        <el-image
          style="width: 100px; height: 60px"
          :src="row.imgUrl"
          :preview-src-list="[row.imgUrl]"
          :hide-on-click-modal="false"
          preview-teleported
          fit="contain"
          alt="主图"
        />
      </template>
      <template #operate>
        <el-button size="small" type="primary">编辑</el-button>
        <el-button size="small" type="danger">删除</el-button>
      </template>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contentTableConfig } from './config/contentTableConfig'
import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'Goods',
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
