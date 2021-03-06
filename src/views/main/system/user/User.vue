<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" @onSearch="onSearch" />
    <div class="content">
      <PageContent
        ref="pageContentRef"
        pageName="users"
        :contentTableConfig="contentTableConfig"
        @onAdd="onAdd"
        @onEdit="onEdit"
      />
    </div>
    <PageModal
      ref="pageModalRef"
      pageName="users"
      :defaultInfo="defaultInfo"
      :modalFormConfig="modalFormConfigRef"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config' //form配置项
import { contentTableConfig } from './config/content.config'
import { modalFormConfig } from './config/modal.config'
import { useStore } from '@/store'

//hooks
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

export default defineComponent({
  name: 'User',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const { pageContentRef, onSearch } = usePageSearch()
    // 1.处理密码的逻辑
    // 此处需要将传递的modalFormConfig数据转为ref对象，这样在修改之后才能响应式
    const modalFormConfigRef = ref(modalFormConfig)
    const newCb = () => {
      // 新增回调函数
      const passWordItem = modalFormConfigRef.value.formItems.find(
        (item) => item.field === 'password'
      )

      passWordItem!.isHidden = false
    }
    const editCb = () => {
      // 编辑回调函数
      const passWordItem = modalFormConfigRef.value.formItems.find(
        (item) => item.field === 'password'
      )

      passWordItem!.isHidden = true
    }

    // 2.动态添加部门和角色列表
    const store = useStore()
    watch(
      () => store.state.entireRole,
      () => {
        const departmentItem = modalFormConfigRef.value.formItems.find(
          (item) => item.field === 'departmentId'
        )
        const roleItem = modalFormConfigRef.value.formItems.find(
          (item) => item.field === 'roleId'
        )
        departmentItem!.options = store.state.entireDepartment.map((item) => {
          return { title: item.name, value: item.id }
        })
        roleItem!.options = store.state.entireRole.map((item) => {
          return { title: item.name, value: item.id }
        })
      },
      {
        immediate: true
      }
    )

    // 3.调用hook获取公共变量和函数
    const { pageModalRef, defaultInfo, onAdd, onEdit } = usePageModal(
      newCb,
      editCb
    )

    return {
      searchFormConfig,
      contentTableConfig,
      modalFormConfigRef,
      defaultInfo,
      pageContentRef,
      pageModalRef,
      onSearch,
      onAdd,
      onEdit
    }
  }
})
</script>

<style scoped lang="less">
.user > .content {
  border-top: 10px solid #f5f5f5;
}
</style>
