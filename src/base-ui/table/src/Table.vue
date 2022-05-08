<template>
  <div class="yj-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
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
    <slot name="footer">
      <div class="footer">
        <el-pagination
          v-model:currentPage="currentPage"
          :page-size="10"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, prev, pager, next"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  name: 'yj-table',
  props: {
    title: {
      type: String,
      default: ''
    },
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
    },
    background: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 0
    }
  },
  setup(prop, { emit }) {
    const handleSizeChange = (val: any) => {
      emit('size-change', val)
    }
    const handleCurrentChange = (val: any) => {
      emit('current-change', val)
    }

    const currentPage = ref(1)

    return {
      currentPage,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
