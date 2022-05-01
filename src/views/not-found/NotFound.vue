<template>
  <div class="not-found">
    <h2>NotFound</h2>
    <el-button type="primary" @click="goBack">返回</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'not-found',
  setup() {
    const $router = useRouter()
    const goBack = (): void => {
      $router.go(-1)
    }
    return {
      goBack
    }
  }
})
</script>

<style scoped lang="less">
.not-found {
  text-align: center;
}
</style>
