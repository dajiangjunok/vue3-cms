import { reactive } from 'vue'
import type { FormRules } from 'element-plus'

export const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    },
    {
      min: 2,
      max: 10,
      message: '账号长度2-10个字符',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      min: 2,
      max: 10,
      message: '密码长度6-12个字符',
      trigger: 'blur'
    }
  ]
})
