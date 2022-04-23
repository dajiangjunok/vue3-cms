import { App } from 'vue'
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput
} from 'element-plus'
import 'element-plus/theme-chalk/index.css'
// import 'element-plus/theme-chalk/el-loading.css'
// import 'element-plus/theme-chalk/el-message.css'

const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput
]

export function registerElement(app: App): void {
  for (const el of components) {
    app.component(el.name, el)
  }
}
