import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootStata } from './../../types'

import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootStata> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    }
  },
  mutations: {
    updateUsersList(state: ISystemState, usersList: any[]) {
      state.usersList = usersList
    },
    updateUsersCount(state: ISystemState, usersCount: number) {
      state.usersCount = usersCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      // 1.发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`update${changePageName}List`, list)
      commit(`update${changePageName}Count`, totalCount)
    }
  }
}

export default systemModule
