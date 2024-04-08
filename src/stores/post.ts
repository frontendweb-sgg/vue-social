import { Api } from '@/axios-instance'
import type { IPost, IComment, IUser, ILike } from '@/types/types'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import { formatDistanceToNow } from 'date-fns'

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
  getters: {
    getPostById(state) {
      return (postId: string) => state.posts.find((post) => post.id === postId) as IPost
    },
    getPostUser(state) {
      return (postId: string) => this.getPostById(postId)?.user as IUser
    },
    avatar: (state: Post) => {
      // return (userId: string) => state.posts.find((post)=>post.user.)
    }
  },
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

        formdata.append('content', payload.content)
        formdata.append('postSatus', payload.postSatus!)
        formdata.append('videoUrl', payload.videoUrl!)
        for (const image of payload.images!) {
          formdata.append('images', image)
        }

        const response = await Api.post('/post', formdata, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })

        this.loading = false

        this.posts = [...this.posts, response.data]
        toast.success('Post added!')
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
    },
    async addComment(postId: string, payload: IComment) {
      try {
        const formdata = new FormData()
        formdata.append('message', payload.message)
        for (const image of payload.images!) {
          formdata.append('images', image)
        }
        const response = await Api.post(`/post/${postId}/comment`, formdata, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        this.posts = this.posts.map((post) =>
          post.id === postId
            ? {
                ...post,
                comments: response.data
              }
            : post
        )
        toast.success('Comment added!')
      } catch (error) {
        if (error instanceof Error) toast.error(error.message)
      }
    },
    async deleteComment(postId: string, commentId: string) {
      try {
        const { data } = await Api.delete(`/post/${postId}/comment/${commentId}`)

        this.posts = this.posts.map((post) =>
          post.id === postId
            ? {
                ...post,
                comments: post.comments?.filter((comment) => comment.id !== commentId)
              }
            : post
        )
        toast.success('Comment deleted!')
      } catch (error) {
        if (error instanceof Error) toast.error(error.message)
      }
    },
    async addLike(postId: string) {
      try {
        const { data } = await Api.put(`/post/${postId}/like`)
        this.posts = this.posts.map((post) =>
          post.id === postId
            ? {
                ...post,
                likes: data
              }
            : post
        )

        toast.success('You have like the post!')
      } catch (error) {
        if (error instanceof Error) toast.error(error.message)
      }
    },
    async removeLike(postId: string) {
      try {
        const { data } = await Api.put(`/post/${postId}/dislike`)
        this.posts = this.posts.map((post) =>
          post.id === postId
            ? {
                ...post,
                likes: data
              }
            : post
        )
        toast.success('You have dislike the post!')
      } catch (error) {
        if (error instanceof Error) toast.error(error.message)
      }
    }
  }
})
