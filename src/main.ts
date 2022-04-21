import { createApp } from 'vue'
import { globalRegister } from './global'
import './service'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// registerApp(app) // 注册相关插件
app.use(globalRegister)
app.use(router)
app.use(store)
// app.use(ElementPlus)

app.mount('#app')
