interface IContentTable {
  title: string
  propList?: any[]
}

export const contentTableConfig: IContentTable = {
  title: '商品管理',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '200' },
    { prop: 'oldPrice', label: '原价格', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '80' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'image' },
    { prop: 'status', label: '状态', minWidth: '60', slotName: 'status' },
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
