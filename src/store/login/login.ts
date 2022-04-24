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
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('accountLoginAction', payload)
    }
  },
  modules: {}
}

export default loginModule
