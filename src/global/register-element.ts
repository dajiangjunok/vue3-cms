import { App } from 'vue'
import { ElButton, ElForm } from 'element-plus'
import 'element-plus/theme-chalk/index.css'
// import 'element-plus/theme-chalk/el-loading.css'
// import 'element-plus/theme-chalk/el-message.css'

const components = [ElButton, ElForm]

export function registerElement(app: App): void {
  for (const el of components) {
    app.component(el.name, el)
  }
}
