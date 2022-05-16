import { ref } from 'vue'
import PageModal from '@/components/page-modal'

export function usePageModal() {
  // 1.拿到modal组件
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  // 2.初始化默认数据，编辑时使用
  const defaultInfo = ref<any>({})
  // 3.新增编辑事件
  const onAdd = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }

  const onEdit = (row: any) => {
    defaultInfo.value = row
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }

  return { pageModalRef, defaultInfo, onAdd, onEdit }
}
