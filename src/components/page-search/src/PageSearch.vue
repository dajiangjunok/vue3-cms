<template>
  <div class="page-search">
    <YJForm v-model="formData" v-bind="searchFormConfig" class="header-form">
      <template #footer>
        <div class="text-right padding-4">
          <el-button type="primary" plain>重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </YJForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import YJForm from '@/base-ui/form'

export default defineComponent({
  name: 'page-search',
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
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
