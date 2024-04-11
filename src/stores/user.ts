import { Api } from '@/axios-instance'
import type { IPost, IUser, Media } from '@/types/types'
import { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import { usePostStore } from '.'
import { useProfileStore } from './profile'

interface UserResponse {
  user: IUser | null
  loading: boolean
}
export const useUserStore = defineStore('user', {
  state: () => ({ loading: false, user: null }) as UserResponse,
  getters: {
    userId: (state) => state.user?.id,
    avatar: (state) => {
      const avatar = state.user?.avatar as Media
      return avatar?.url !== '' ? avatar?.url : '/avatar.png'
    },
    mobile: (state) => state.user?.mobile,
    name: (state) => {
      const names = state.user?.name.split(' ') ?? ([] as string[])
      if (names.length) {
        return names[0][0] + '' + names[1][0]
      }
      return ''
    }
  },
  actions: {
    async getLoggedInUser() {
      try {
        const profileStore = useProfileStore()
        this.loading = true
        const response = await Api.get('/user/me')
        if (response.status === 200) {
          profileStore.getProfile()
        }
        this.user = response.data
      } catch (error) {
        if (error instanceof AxiosError) {
          const errors = error.response?.data.errors
          for (let error of errors) {
            toast.error(error.message)
          }
        }
      } finally {
        this.loading = false
      }
    },
    async updateAvatar(payload: FormData) {
      try {
        this.loading = true
        const { data } = await Api.put<Media>('/user/avatar', payload, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })

        this.user?.avatar ? (this.user.avatar = data) : null
      } catch (error) {
        if (error instanceof AxiosError) {
          const errors = error.response?.data.errors

          for (let error of errors) {
            toast.error(error.message)
          }
        }
      } finally {
        this.loading = false
      }
    },
    async getLoggedInUserPost() {
      try {
        const postStore = usePostStore()
        postStore.loading = true
        const { data } = await Api.get<IPost[]>('/user/me/posts')
        postStore.posts = data
        postStore.loading = false
      } catch (error) {
        if (error instanceof AxiosError) {
          const errors = error.response?.data.errors

          for (let error of errors) {
            toast.error(error.message)
          }
        }
      }
    }
  }
})
