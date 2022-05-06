import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootStata } from './../../types'

import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootStata> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    updateUserList(state: ISystemState, userList: any[]) {
      state.userList = userList
    },
    updateUserCount(state: ISystemState, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      // 1.发送请求
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )
      const { list, totalCount } = pageResult.data
      commit('updateUserList', list)
      commit('updateUserCount', totalCount)
    }
  }
}

export default systemModule
