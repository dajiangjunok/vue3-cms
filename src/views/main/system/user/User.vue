<template>
  <div class="user">
    <YJForm v-bind="searchFormConfig" class="header-form" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import YJForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'User',
  components: {
    YJForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less">
.header-form {
  border: 1px solid #333;
}
</style>
