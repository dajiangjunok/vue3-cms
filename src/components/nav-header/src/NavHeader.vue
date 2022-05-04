<template>
  <div class="nav-header">
    <i
      class="iconfont icon-zhankai"
      :class="isFold ? 'fold' : ''"
      @click="onFoldChange"
    ></i>
    <div class="content">
      <Breadcurmb :breadcrumbs="breadcrumbs" />
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import UserInfo from './UserInfo.vue'
import Breadcurmb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'

export default defineComponent({
  name: 'nav-header',
  emits: ['changeFold'],
  components: {
    UserInfo,
    Breadcurmb
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const onFoldChange = () => {
      isFold.value = !isFold.value
      emit('changeFold', isFold.value)
    }

    const breadcrumbs = computed(() => {
      const route = useRoute()
      const store = useStore()
      const currentRoute = route.path
      const userMenus = store.state.login.userMenu

      return pathMapBreadcrumbs(userMenus, currentRoute)
    })
    return {
      isFold,
      onFoldChange,
      breadcrumbs
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
    padding: 0 10px;
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
