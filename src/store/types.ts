import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootStata {
  name: string
  login?: ILoginState
  entireDepartment: any[]
  entireRole: any[]
}

interface IRootStateAndModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootStata & IRootStateAndModule
