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
    },
    async addPost(payload: IPost) {
      try {
        this.loading = true
        const formdata = new FormData()

        formdata.append('title', payload.title)
        formdata.append('description', payload.description)
        for (const image of payload.images!) {
          formdata.append('images', image)
        }

        const response = await Api.post('/post', formdata)
        this.loading = false
        this.posts = response.data
      } catch (error) {
        if (error instanceof Error) toast.error(error.message)
      }
    },
    async deletePost(postId: string) {
      try {
        const response = await Api.delete(`/post/${postId}`)
        if (response.status == 200) {
          this.posts = this.posts.filter((post) => post.id !== postId)
        }
      } catch (error) {
        if (error instanceof Error) toast.error(error.message)
      }
    }
  }
})
