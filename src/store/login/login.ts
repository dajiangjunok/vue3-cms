import { Module } from 'vuex'
import { IRootStata } from '../types'
import { ILoginState } from './types'

import {
  accountLogin,
  getUserInfo,
  getUserMenu
} from '@/service/login/service_login'
import { ElMessage } from 'element-plus'
import { mapMenusToPermissions } from '@/utils/map-menus'

const loginModule: Module<ILoginState, IRootStata> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '', //用户信息
      userMenu: [],
      permissions: []
    }
  },
  mutations: {
    updatedToken(state: ILoginState, payload: any) {
      state.token = payload
    },
    updateUserInfo(state: ILoginState, payload: any) {
      state.userInfo = payload
    },
    updateUserMenu(state: ILoginState, payload: any) {
      state.userMenu = payload
      // 获取用户按钮的权限
      const permissions = mapMenusToPermissions(payload)
      state.permissions = permissions
    }
  },
  actions: {
    // 登录
    async accountLoginAction({ commit, dispatch }, payload: any) {
      const res = await accountLogin(payload)
      if (res.code === 0) {
        commit('updatedToken', res.data.token)
        dispatch('getUserInfoAction', res.data.id)
        // 发送初始化的请求(完整的role/department)
        dispatch('getInitialDataAction', null, { root: true })
      } else {
        ElMessage.warning('登录失败～')
      }
    },
    // 获取用户信息
    async getUserInfoAction({ commit, dispatch }, payload: string) {
      const res = await getUserInfo(payload)
      if (res.code === 0) {
        commit('updateUserInfo', res.data)

        dispatch('getUserMenu', res.data.role.id)
      } else {
        ElMessage.warning('获取用户信息失败～')
      }
    },
    // 获取用户菜单
    async getUserMenu({ commit }, id: string) {
      const userMenusResult = await getUserMenu(id)
      const userMenus = userMenusResult.data
      commit('updateUserMenu', userMenus)
    }
  }
}

export default loginModule
