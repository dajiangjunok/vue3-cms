import yjRequest from '@/service'

// 获取列表
export function getPageListData(url: string, queryInfo: any) {
  return yjRequest.post<any>({
    url: url,
    data: queryInfo
  })
}
