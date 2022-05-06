<template>
  <div class="yj-table">
    <el-table v-bind="otherProps" :data="tableList" style="width: 100%">
      <template v-for="columnProp in propList" :key="columnProp.id">
        <el-table-column align="center" v-bind="columnProp">
          <template #default="{ row }">
            <slot :name="columnProp.slotName" :row="row">
              {{ row[columnProp.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'yj-table',
  props: {
    tableList: {
      type: Array,
      required: true
    },
    propList: {
      type: Array as PropType<any>,
      required: true
    },
    otherProps: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
