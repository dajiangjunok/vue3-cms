<template>
  <div class="breadcurmb">
    <el-breadcrumb :separator="separator">
      <el-breadcrumb-item v-for="bread in breadcrumbs" :key="bread.name">{{
        bread.name
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumb } from '../types'

export default defineComponent({
  name: 'breadcurmb',
  props: {
    separator: {
      type: String,
      default: '/'
    },
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
