<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <YJFrom v-model="formData" v-bind="modalFormConfig" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="onConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import YJFrom from '@/base-ui/form'
import { useStore } from '@/store'

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
    },
    pageName: {
      type: String,
      require: true
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

    // 点击确定按钮的逻辑
    const store = useStore()
    const onConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        console.log('编辑用户')
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        console.log('新建用户')
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value }
        })
      }
    }
    return {
      dialogVisible,
      formData,
      onConfirmClick
    }
  }
})
</script>

<style scoped lang="less"></style>
