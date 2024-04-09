import { usePostStore } from '@/stores'
import { storeToRefs } from 'pinia'

export function usePost() {
  const postStore = usePostStore()
  const { getPostById, getPostUser } = storeToRefs(postStore)
  return { getPostById, getPostUser }
}
