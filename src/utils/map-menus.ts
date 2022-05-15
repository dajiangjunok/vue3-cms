import type { RouteRecordRaw } from 'vue-router'
import router from '@/router'
import { IBreadcrumb } from '@/base-ui/breadcrumb/types/index'

let firstMenu: any = null

interface IMenu {
  children: any[] | null
  icon: string
  id: number
  name: string
  sort: number
  type: number
  url: string
}

export function mapMenusToRoutes(userMenus: any[]): void {
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
        if (!firstMenu) {
          firstMenu = menu
        }
      }
    })
  }

  _recurseGetRoute(userMenus)
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcurmbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(
        menu.children ?? [],
        currentPath,
        breadcurmbs
      )
      if (findMenu) {
        breadcurmbs?.push({ name: menu.name })
        breadcurmbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      // 返回一致的
      return menu
    }
  }
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permissions
}

export { firstMenu }
