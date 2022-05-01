<template>
  <div class="nav-header">
    <i
      class="iconfont icon-zhankai"
      :class="isFold ? 'fold' : ''"
      @click="onFoldChange"
    ></i>
    <div class="content">
      <div>面包屑</div>
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './UserInfo.vue'

export default defineComponent({
  name: 'nav-header',
  emits: ['changeFold'],
  components: {
    UserInfo
  },
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
.nav-header {
  display: flex;
  width: 100%;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }

  .icon-zhankai {
    font-size: 26px;
    color: #333333;
    cursor: pointer;
  }
  .fold {
    display: inline-block;
    transform: rotateY(180deg);
  }
}
</style>
