import { ILoginState } from './login/types'

export interface IRootStata {
  name: string
  login?: ILoginState
}

interface IRootStateAndModule {
  login: ILoginState
}

export type IStoreType = IRootStata & IRootStateAndModule
