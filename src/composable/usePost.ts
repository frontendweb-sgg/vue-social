import { usePostStore } from '@/stores'
import { storeToRefs } from 'pinia'

export function usePost() {
  const postStore = usePostStore()
  const { getPostById, getPostUser, posts } = storeToRefs(postStore)

  function getPhotos() {
    return posts.value.flatMap((post) => post.images)
  }
  return { getPostById, getPostUser, posts }
}
