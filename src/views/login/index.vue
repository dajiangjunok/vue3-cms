<template>
  <div class="yj-login">
    <LoginPanelVue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanelVue from './components/LoginPanel.vue'

export default defineComponent({
  name: 'v-login',
  components: {
    LoginPanelVue
  }
})
</script>

<style scoped lang="less">
.yj-login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('~@/assets/img/login-bg.svg');
}
</style>
