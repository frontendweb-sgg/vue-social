import { Api } from '@/axios-instance'
import type { IEducation, IEmployment, IProfile } from '@/types/types'
import { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

export interface Profile {
  loading: boolean
  profile: IProfile | null
  educations: IEducation[]
  employments: IEmployment[]
}
export const useProfileStore = defineStore('profile', {
  state: (): Profile => ({
    loading: false,
    profile: null,
    employments: [],
    educations: []
  }),
  getters: {},
  actions: {
    async getProfile() {
      try {
        this.loading = true
        const { data } = await Api.get<IProfile>('/profile')
        this.profile = data
        this.educations = data.education as IEducation[]
        this.employments = data.employment as IEmployment[]
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
    }
  }
})
