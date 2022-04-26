import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootStata, IStoreType } from './types'
import login from './login/login'
import VuexPersist from 'vuex-persist'

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

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
