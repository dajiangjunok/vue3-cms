<template>
  <div class="nav-header">
    <i
      class="iconfont icon-zhankai"
      :class="isFold ? 'fold' : ''"
      @click="onFoldChange"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'nav-header',
  emits: ['changeFold'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const onFoldChange = () => {
      isFold.value = !isFold.value
      emit('changeFold', isFold.value)
    }
    return {
      isFold,
      onFoldChange
    }
  }
})
</script>

<style scoped lang="less">
.icon-zhankai {
  font-size: 26px;
  color: #333333;
  cursor: pointer;
}
.fold {
  display: inline-block;
  transform: rotateY(180deg);
}
</style>
