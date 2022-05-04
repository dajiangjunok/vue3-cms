import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootStata, IStoreType } from './types'
import login from './login/login'
import VuexPersist from 'vuex-persist'
import { mapMenusToRoutes } from '@/utils/map-menus'

const persist = new VuexPersist({
  storage: window.localStorage,
  key: 'login',
  modules: ['login']
})

const store = createStore<IRootStata>({
  state: () => {
    return {
      name: 'coderwang'
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login
  },
  plugins: [persist.plugin]
})

// console.log(store.state.login!.userMenu)
// 注册相关权限路由
mapMenusToRoutes(store.state.login!.userMenu)

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
