import { Module } from 'vuex'
import { IRootStata } from '../types'
import { ILoginState } from './types'

const loginModule: Module<ILoginState, IRootStata> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    updatedUserInfo(state: ILoginState, payload: any) {
      state.userInfo = payload
    }
  },
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('accountLoginAction', payload)
      commit('userInfo', { name: 'wyj', age: 22 })
    }
  },
  modules: {}
}

export default loginModule
