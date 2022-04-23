<template>
  <div class="yj-login-phone">
    <el-form
      ref="phoneFormRef"
      :model="phoneForm"
      :rules="rules"
      label-width="80px"
    >
      <el-form-item label="手机号:" prop="phoneNumber">
        <el-input
          v-model="phoneForm.phoneNumber"
          placeholder="请输入手机号"
          clearable
        />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          v-model="phoneForm.password"
          placeholder="请输入密码"
          clearable
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { rules } from '../config/phone-config'

export default defineComponent({
  name: 'login-phone',
  setup() {
    const phoneFormRef = ref<FormInstance>()
    const phoneForm = reactive({
      phoneNumber: '',
      password: ''
    })

    const login = () => {
      console.log('手机登录成功')
    }

    return {
      phoneFormRef,
      phoneForm,
      rules,
      login
    }
  }
})
</script>

<style scoped lang="less"></style>
