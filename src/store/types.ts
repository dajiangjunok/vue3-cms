import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IDashboardState } from './main/analysis/types'

export interface IRootStata {
  name: string
  login?: ILoginState
  entireDepartment: any[]
  entireRole: any[]
}

interface IRootStateAndModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

export type IStoreType = IRootStata & IRootStateAndModule
