import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootStata } from './../../types'

import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootStata> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    updateUsersList(state: ISystemState, usersList: any[]) {
      state.usersList = usersList
    },
    updateUsersCount(state: ISystemState, usersCount: number) {
      state.usersCount = usersCount
    },
    updateRoleList(state: ISystemState, roleList: any[]) {
      state.roleList = roleList
    },
    updateRoleCount(state: ISystemState, roleCount: number) {
      state.roleCount = roleCount
    },
    updateGoodsList(state: ISystemState, goodsList: any[]) {
      state.goodsList = goodsList
    },
    updateGoodsCount(state: ISystemState, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    updateMenuList(state: ISystemState, menuList: any[]) {
      state.menuList = menuList
    },
    updateMenuCount(state: ISystemState, menuCount: number) {
      state.menuCount = menuCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      // 1.发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo, true)
      const { list, totalCount } = pageResult.data
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

      commit(`update${changePageName}List`, list)
      commit(`update${changePageName}Count`, totalCount)
    }
  }
}

export default systemModule
