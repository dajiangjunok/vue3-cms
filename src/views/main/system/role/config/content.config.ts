interface IContentTable {
  title: string
  propList?: any[]
}

export const contentTableConfig: IContentTable = {
  title: '角色管理',
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '250' },
    {
      prop: 'createAt',
      label: '创建时间',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'operate' }
  ]
}
