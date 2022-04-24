<template>
  <div class="login-panel">
    <h1 class="text-center">CMS后台管理</h1>
    <el-tabs v-model="activeTab" type="border-card" stretch>
      <el-tab-pane name="userLogin">
        <template #label>
          <span><i class="iconfont icon-user" /> 账号登录</span>
        </template>
        <LoginAccount ref="loginAccountRef" />
      </el-tab-pane>
      <el-tab-pane name="phoneLogin">
        <template #label>
          <span> <i class="iconfont icon-mobile-phone" /> 手机登录</span>
        </template>
        <LoginPhone ref="loginPhoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="login">
      <div class="flex-between margin-top-4 margin-bottom-4">
        <el-checkbox v-model="isCheckPassword">记住密码</el-checkbox>
        <el-button type="text">忘记密码</el-button>
      </div>
      <el-button class="login-btn" type="primary" @click="onLogin"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'

import cache from '@/utils/cache'

export default defineComponent({
  name: 'login-panel',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const activeTab = ref<string>('userLogin')
    const isCheckPassword = ref(cache.getCache('isCheckPassword'))
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
    const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>()

    const onLogin = () => {
      if (activeTab.value === 'userLogin') {
        loginAccountRef.value?.login(isCheckPassword.value)
      } else {
        loginPhoneRef.value?.login()
      }
    }

    return {
      activeTab,
      isCheckPassword,
      onLogin,
      loginAccountRef,
      loginPhoneRef
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 160px;
  width: 340px;

  .login {
    width: 100%;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
