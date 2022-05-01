type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any //布局响应式 xs lg等
  itemStyle: any
}

export interface IFormItem {
  type: IFormType //输入框类型
  label: string //输入框标题
  rules?: any[] //输入框规则
  placeholder?: any //输入框默认输入值
  // 针对select
  options?: any[] //下拉选择配置项
  // 针对特殊的属性
  otherOptions?: any //其他属性
  isHidden?: boolean //是否显示
}
