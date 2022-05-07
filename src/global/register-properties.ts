import { App } from 'vue'

export function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatDateToDay(time: string) {
      return time.substring(0, 10)
    }
  }
}
