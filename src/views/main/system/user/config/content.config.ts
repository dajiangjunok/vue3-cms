import { PropType } from 'vue'
interface IContentTable {
  title: string
  propList?: any[]
}

export const contentTableConfig: IContentTable = {
  title: '用户管理',
  propList: [
    // {
    //   label: 'id',
    //   prop: 'id'
    // },
    {
      label: '用户名',
      prop: 'name'
    },
    {
      label: '真实姓名',
      prop: 'realname'
    },
    {
      label: '手机号',
      prop: 'cellphone'
    },
    {
      label: '状态',
      prop: 'enable',
      slotName: 'enable',
      width: 80
    },
    {
      label: '创建时间',
      prop: 'createAt',
      slotName: 'createAt'
    },
    {
      label: '更新时间',
      prop: 'updateAt',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      slotName: 'operate',
      width: 80
    }
  ]
}
