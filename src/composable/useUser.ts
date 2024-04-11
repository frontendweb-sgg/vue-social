import { useUserStore } from '@/module/user/store/user'
import { storeToRefs } from 'pinia'

export function useLoggedInUser() {
  const userStore = useUserStore()
  const { avatar, loading, user, name, userId } = storeToRefs(userStore)

  return { user, loading, avatar, name, userId, changeAvatar: userStore.updateAvatar }
}
