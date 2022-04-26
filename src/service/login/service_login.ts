import yjRequest from '@/service'
import { IAccount, IDataType, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}
// 登录
export function accountLogin(config: IAccount) {
  return yjRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: config
  })
}
// 获取用户详情
export function getUserInfo(id: string) {
  return yjRequest.get<IDataType<any>>({
    url: LoginAPI.LoginUserInfo + id
  })
}
// 获取用户菜单
export function getUserMenu(userId: string) {
  return yjRequest.get<IDataType>({
    url: LoginAPI.UserMenus + userId + '/menu'
  })
}
