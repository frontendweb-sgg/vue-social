import { useProfileStore } from '@/module/user/store/profile'
import { storeToRefs } from 'pinia'

export function useProfile() {
  const profileStore = useProfileStore()

  const { loading, profile, educations, employments } = storeToRefs(profileStore)

  return {
    loading,
    profile,
    educations,
    employments
  }
}
