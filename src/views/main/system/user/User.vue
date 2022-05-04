<template>
  <div class="user">
    <YJForm v-model="formData" v-bind="searchFormConfig" class="header-form" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import YJForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config' //form配置项

export default defineComponent({
  name: 'User',
  components: {
    YJForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })

    return {
      searchFormConfig,
      formData
    }
  }
})
</script>

<style scoped lang="less">
.header-form {
  background-color: #fff;
  padding-right: 10px;
}
</style>
