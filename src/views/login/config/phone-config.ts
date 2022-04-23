import { reactive } from 'vue'
import type { FormRules } from 'element-plus'

export const rules = reactive<FormRules>({
  phoneNumber: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      pattern: /^1[3456789]\d{9}$/,
      message: '请检查手机号是否正确',
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
