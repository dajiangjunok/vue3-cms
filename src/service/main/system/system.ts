import yjRequest from '@/service'

// 获取列表
export function getPageListData(
  url: string,
  queryInfo: any,
  isShowLoading = false
) {
  return yjRequest.post<any>({
    url: url,
    data: queryInfo,
    isShowLoading: isShowLoading
  })
}

// 删除列表数据
export function deletePageData(url: string) {
  return yjRequest.delete<any>({
    url: url
  })
}
