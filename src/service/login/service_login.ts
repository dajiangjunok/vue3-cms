import yjRequest from '@/service'
import { IAccount, IDataType, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

export function accountLogin(config: IAccount) {
  return yjRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: config
  })
}

export function getUserInfo(id: string) {
  return yjRequest.get<IDataType<any>>({
    url: LoginAPI.LoginUserInfo + id
  })
}
