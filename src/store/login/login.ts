import { Module } from 'vuex'
import { IRootStata } from '../types'
import { ILoginState } from './types'

import { accountLogin } from '@/service/login/service_login'

const loginModule: Module<ILoginState, IRootStata> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    updatedToken(state: ILoginState, payload: any) {
      state.token = payload
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      console.log('accountLoginAction', payload)
      const res = await accountLogin(payload)

      commit('updatedToken', res.data.token)
    }
  }
}

export default loginModule
