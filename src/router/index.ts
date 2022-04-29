import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import cache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/index.vue')
    // children: allRotes
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
