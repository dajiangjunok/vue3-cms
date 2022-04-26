<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <NavMenu />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NavHeader />
        </el-header>
        <el-main class="page-content"> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// 组件导入
import { NavHeader } from '@/components/nav-header'
import { NavMenu } from '@/components/nav-menu'

export default defineComponent({
  name: 'v-main',
  components: {
    NavHeader,
    NavMenu
  },
  setup() {
    const isCollapse = ref(false)
    return {
      isCollapse
    }
  }
})
</script>

<style lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
