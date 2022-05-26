import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootStata, IStoreType } from './types'

import login from './login/login'
import system from './main/system/system'
import dashboard from './main/analysis/dashboard'

import VuexPersist from 'vuex-persist'
import { mapMenusToRoutes } from '@/utils/map-menus'
import { getPageListData } from '@/service/main/system/system'

const persist = new VuexPersist({
  storage: window.localStorage,
  key: 'login',
  modules: ['login']
})

const store = createStore<IRootStata>({
  state: () => {
    return {
      name: 'coderwang',
      entireDepartment: [],
      entireRole: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门和角色数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data

      // 2.保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  },
  plugins: [persist.plugin]
})

// console.log(store.state.login!.userMenu)
// 注册相关权限路由
mapMenusToRoutes(store.state.login!.userMenu)

// export function setupStore() {
//   store.dispatch('getInitialDataAction')
// }

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
