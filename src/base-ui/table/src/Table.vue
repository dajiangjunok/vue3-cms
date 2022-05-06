<template>
  <div class="yj-table">
    <el-table :data="tableList" style="width: 100%">
      <template v-for="columnProp in propList" :key="columnProp.id">
        <el-table-column align="center" v-bind="columnProp"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'yj-table',
  props: {
    tableList: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
