import { Api } from '@/axios-instance'
import type { IPost } from '@/types/types'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

interface Post {
  posts: IPost[]
  post: IPost | null
  loading: boolean
}
export const usePostStore = defineStore('post', {
  state: () =>
    ({
      post: null,
      posts: [],
      loading: false
    }) as Post,
  getters: {},
  actions: {
    async getPosts() {
      try {
        this.loading = true
        const response = await Api.get('/post')
        this.loading = false
        this.posts = response.data
      } catch (error) {
        if (error instanceof Error) toast.error(error.message)
      }
    }
  }
})
