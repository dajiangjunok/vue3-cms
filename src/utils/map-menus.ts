import type { RouteRecordRaw } from 'vue-router'
import router from '@/router'

interface IMenu {
  children: any[] | null
  icon: string
  id: number
  name: string
  sort: number
  type: number
  url: string
}

export function mapMenusToRoutes(userMenu: any[]): void {
  // 1.拿到所有的routes
  const mainRotes = require.context('../router/main', true, /\.ts$/)
  const allRotes: RouteRecordRaw[] = []
  mainRotes.keys().forEach((_path) => {
    const vComp = require(`../router/main${_path.split('.')[1]}`)

    allRotes.push(vComp.default)
  })

  // 2.匹配菜单中含有的路由
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: IMenu[]) => {
    menus.forEach((menu: IMenu) => {
      if (menu.type === 1) {
        // 菜单组，不用加入路由
        if (menu.children) {
          _recurseGetRoute(menu.children)
        }
      } else if (menu.type === 2) {
        // 菜单，加入路由
        const route = allRotes.find((route) => route.path === menu.url)
        if (route) {
          router.addRoute('main', route)
        }
      }
    })
  }

  _recurseGetRoute(userMenu)
}
