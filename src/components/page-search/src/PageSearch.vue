<template>
  <div class="page-search">
    <YJForm v-model="formData" v-bind="searchFormConfig" class="header-form">
      <template #footer>
        <div class="text-right padding-4">
          <el-button type="primary" plain @click="onRefresh">重置</el-button>
          <el-button type="primary" @click="onSearch">搜索</el-button>
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
  setup(props, { emit }) {
    const formItems = [...props.searchFormConfig.formItems]
    const _formData: any = {}
    formItems.forEach((item) => {
      _formData[item.field] = ''
    })

    // 此处不能写死，需要通过配置生成 formData
    let formData = ref(_formData)

    // 刷新
    const onRefresh = () => {
      formData.value = _formData
      emit('onSearch', formData.value)
    }
    const onSearch = () => {
      emit('onSearch', formData.value)
    }

    return {
      formData,
      onRefresh,
      onSearch
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
