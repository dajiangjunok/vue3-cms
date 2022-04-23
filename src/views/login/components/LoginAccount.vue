<template>
  <div class="yj-login-account">
    <el-form
      ref="accountFormRef"
      :model="accountForm"
      :rules="rules"
      label-width="120px"
    >
      <el-form-item label="账号:" prop="username">
        <el-input
          v-model="accountForm.username"
          placeholder="请输入账号"
          clearable
        />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          v-model="accountForm.password"
          placeholder="请输入密码"
          clearable
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import type { FormInstance } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'

import { rules } from '../config/account-config'

export default defineComponent({
  name: 'login-account',
  setup() {
    const accountFormRef = ref<FormInstance>()

    const accountForm = reactive({
      username: '',
      password: ''
    })

    return {
      accountFormRef,
      rules,
      accountForm
    }
  }
})
</script>

<style scoped lang="less"></style>
