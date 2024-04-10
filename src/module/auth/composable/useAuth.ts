import { storeToRefs } from 'pinia'
import { useAuthStore } from '../store/auth'

export function useAuth() {
  const authStore = useAuthStore()

  // state
  const { isAdmin, isAuth, isUser, loading, redirectedUrl, token, user, avatar } =
    storeToRefs(authStore)

  // methods
  const { signIn, signUp, logout } = authStore

  return {
    isAdmin,
    isAuth,
    isUser,
    loading,
    redirectedUrl,
    token,
    user,
    avatar,
    signIn,
    signUp,
    logout
  }
}
