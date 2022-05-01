import { App } from 'vue'
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElDropdown,
  ElDropdownItem,
  ElAvatar
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
  ElInput,
  ElCheckbox,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElDropdown,
  ElDropdownItem,
  ElAvatar
]

export function registerElement(app: App): void {
  for (const el of components) {
    app.component(el.name, el)
  }
}
