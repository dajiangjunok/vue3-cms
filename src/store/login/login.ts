import { Module } from 'vuex'
import { IRootStata } from '../types'
import { ILoginState } from './types'

import { accountLogin, getUserInfo } from '@/service/login/service_login'
import { ElMessage } from 'element-plus'

const loginModule: Module<ILoginState, IRootStata> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '' //用户信息
    }
  },
  mutations: {
    updatedToken(state: ILoginState, payload: any) {
      state.token = payload
    },
    updateUserInfo(state: ILoginState, payload: any) {
      state.userInfo = payload
    }
  },
  actions: {
    // 登录
    async accountLoginAction({ commit, dispatch }, payload: any) {
      const res = await accountLogin(payload)
      if (res.code === 0) {
        commit('updatedToken', res.data.token)
        dispatch('getUserInfoAction', res.data.id)
      } else {
        ElMessage.warning('登录失败～')
      }
    },
    // 获取用户信息
    async getUserInfoAction({ commit }, payload: string) {
      const res = await getUserInfo(payload)
      if (res.code === 0) {
        commit('updateUserInfo', res.data)
      } else {
        ElMessage.warning('获取用户信息失败～')
      }
    }
  }
}

export default loginModule
