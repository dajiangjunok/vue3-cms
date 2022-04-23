<template>
  <div class="login-panel">
    <h1 class="text-center">CMS后台管理</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="iconfont icon-user" /> 账号登录</span>
        </template>
        <LoginAccount />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span> <i class="iconfont icon-mobile-phone" /> 手机登录</span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'

export default defineComponent({
  name: 'login-panel',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.login-panel {
  margin-bottom: 160px;
  width: 380px;
}
</style>
