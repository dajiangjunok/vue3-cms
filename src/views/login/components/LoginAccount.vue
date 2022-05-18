<template>
  <div class="yj-login-account">
    <el-form
      ref="accountFormRef"
      :model="accountForm"
      :rules="rules"
      label-width="80px"
    >
      <el-form-item label="账号:" prop="name">
        <el-input
          v-model="accountForm.name"
          placeholder="请输入账号"
          clearable
        />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          v-model="accountForm.password"
          placeholder="请输入密码"
          clearable
          show-password
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import type { FormInstance } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { rules } from '../config/account-config'
import cache from '@/utils/cache'

export default defineComponent({
  name: 'login-account',
  setup() {
    const accountFormRef = ref<FormInstance>()
    const $router = useRouter()

    const accountForm = reactive({
      name: cache.getCache('name') ?? '',
      password: cache.getCache('password') ?? ''
    })

    const store = useStore()

    const login = (isCheckPassword: boolean) => {
      accountFormRef.value?.validate(async (flag) => {
        if (flag) {
          if (isCheckPassword) {
            cache.setCache('isCheckPassword', isCheckPassword)
            cache.setCache('name', accountForm.name)
            cache.setCache('password', accountForm.password)
          } else {
            cache.deleteCache('isCheckPassword')
            cache.deleteCache('name')
            cache.deleteCache('password')
          }

          // 登录逻辑
          await store.dispatch('login/accountLoginAction', { ...accountForm })

          $router.push({ path: '/main' })
        }
      })
    }

    return {
      accountFormRef,
      rules,
      accountForm,
      login
    }
  }
})
</script>

<style scoped lang="less"></style>
