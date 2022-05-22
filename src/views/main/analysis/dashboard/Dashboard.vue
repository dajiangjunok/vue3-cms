<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <YJCard title="分类商品数量(饼图)"> </YJCard>
      </el-col>
      <el-col :span="10">
        <YJCard title="不同城市商品销量"> </YJCard>
      </el-col>
      <el-col :span="7">
        <YJCard title="分类商品数量(玫瑰图)"> </YJCard>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <YJCard title="分类商品的销量"> </YJCard>
      </el-col>
      <el-col :span="12">
        <YJCard title="分类商品的收藏"> </YJCard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'

import YJCard from '@/base-ui/card'

export default defineComponent({
  name: 'dashboard',
  components: {
    YJCard
  },
  setup() {
    const store = useStore()

    return {}
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
