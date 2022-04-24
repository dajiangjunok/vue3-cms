import { createStore } from 'vuex'
import { IRootStata } from './types'
import login from './login/login'

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
  }
})

export default store
