import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const onSearch = (userInfo: any) => {
    pageContentRef.value?.getPageData(userInfo)
  }

  return { pageContentRef, onSearch }
}
