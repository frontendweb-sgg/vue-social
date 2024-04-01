import { Api } from '@/axios-instance'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

interface Auth {
  loading: boolean
  token: string
  user: IUser | null
  redirectedUrl: string
}
interface AuthResponse {
  user: IUser
  accessToken: string
  expireIn: number
}
let timer: ReturnType<typeof setTimeout>
export const authStore = defineStore('auth', {
  state: () =>
    ({
      loading: false,
      token: '',
      user: null,
      redirectedUrl: '/'
    }) as Auth,
  getters: {
    isAuth: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === 'admin',
    isUser: (state) => state.user?.role === 'user'
  },
  actions: {
    async signIn(payload: IUserSignin) {
      try {
        const { data } = await Api.post<AuthResponse>('/auth', payload)

        const today = new Date(Date.now())
        today.setTime(today.getTime() + data.expireIn * 1000)
        const expireTime = data.expireIn * 1000

        localStorage.setItem('token', data.accessToken)
        localStorage.setItem('expireTime', today.toString())
        localStorage.setItem('user', JSON.stringify(data.user))

        this.autoLogout(data.expireIn)
        this.checkUserIsLoggedIn()

        if (data.user.role === 'admin') {
          this.router.push('/admin')
        }

        if (data.user.role === 'user') {
          this.router.push('/user')
        }
      } catch (error) {
        if (error instanceof Error) toast.error(error.message)
      }
    },
    async signUp() {},

    // Logout
    logout() {
      this.$reset()
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('expireTime')
      if (timer) {
        clearTimeout(timer)
      }
    },

    // check use is logged in
    checkUserIsLoggedIn() {
      const user = JSON.parse(localStorage.getItem('user') as string) as IUser
      const expireTime = new Date(localStorage.getItem('expireTime') as string)
      const token = localStorage.getItem('token')

      if (!token || new Date() > expireTime) {
        this.logout()
      } else {
        this.token = token
        this.user = user
        this.autoLogout((expireTime.getTime() - new Date().getTime()) / 1000)
      }
    },

    // autologout
    autoLogout(time: number) {
      timer = setTimeout(() => {
        this.logout()
      }, time * 1000)
    }
  }
})
