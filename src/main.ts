import { createApp } from 'vue'
import { globalRegister } from './global'
import App from './App.vue'

import '@/assets/css/index.less'
import 'normalize.css'

import router from './router'
import store from './store'
// import yjRequest from './service'

const app = createApp(App)

// registerApp(app) // 注册相关插件
app.use(globalRegister)
app.use(router)
app.use(store)
// app.use(ElementPlus)

app.mount('#app')
