<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <YJFrom v-model="formData" v-bind="modalFormConfig" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import YJFrom from '@/base-ui/form'

export default defineComponent({
  name: 'page-modal',
  props: {
    modalFormConfig: {
      type: Object,
      required: true
    },
    // 编辑回显使用
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    YJFrom
  },
  setup(props) {
    const dialogVisible = ref(false)
    let formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newVal) => {
        // 一旦发生变化说明可能触发编辑操作，此时将default中数据与formData中数据进行整合
        for (const item of props.modalFormConfig.formItems) {
          formData.value[`${item.field}`] = newVal[`${item.field}`]
        }
      }
    )

    return {
      dialogVisible,
      formData
    }
  }
})
</script>

<style scoped lang="less"></style>
