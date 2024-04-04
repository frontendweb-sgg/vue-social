import { Api } from '@/axios-instance'
import type { IUser } from '@/types/types'
import { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

interface UserResponse {
  user: IUser | null
  loading: boolean
}
export const useUserStore = defineStore('user', {
  state: () => ({ loading: false, user: null }) as UserResponse,
  getters: {},
  actions: {
    async getLoggedInUser() {
      try {
        this.loading = true
        const response = await Api.get('/user/me')
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
        const { data } = await Api.put<{ avatar: string }>('/user/avatar', payload, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        this.user?.avatar ? (this.user.avatar = data.avatar as string) : null
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
