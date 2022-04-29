import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import cache from '@/utils/cache'

// 拿到所有的routes
const mainRotes = require.context('./main', true, /\.ts$/)
const allRotes: any[] = []
mainRotes.keys().forEach((_path) => {
  const vComp = require(`../../src/router/main${_path.split('.')[1]}`)

  allRotes.push(vComp)
})
console.log(allRotes)

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/index.vue'),
    children: []
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const loginData = cache.getCache('login')?.login
    const token = loginData?.token
    if (!token) return '/login'
  }
})

export default router
