import { Api } from '@/axios-instance'
import type { IUser, IUserSignin, IUserSignup } from '@/types/types'
import { AxiosError } from 'axios'
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
export const useAuthStore = defineStore('auth', {
  state: () =>
    ({
      loading: false,
      token: '',
      user: null,
      redirectedUrl: '/'
    }) as Auth,
  getters: {
    avatar: (state) => state.user?.avatar,
    userId: (state) => state.user?.id,
    isAuth: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === 'admin',
    isUser: (state) => state.user?.role === 'user',
    username: (state) => {
      const names = state.user?.name.split(' ') ?? ([] as string[])
      if (names.length) {
        return names[0][0] + '' + names[1][0]
      }
      return ''
    }
  },
  actions: {
    async signIn(payload: IUserSignin) {
      try {
        console.log('payload', payload)
        this.loading = true
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
    async signUp(payload: IUserSignup) {
      try {
        this.loading = true
        await Api.post('/auth/signup', payload)
        toast.success('Account created successfully!, please login')
        setTimeout(() => {
          this.router.push('/auth')
        }, 3000)
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
    logout() {
      this.$reset()
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('expireTime')
      if (timer) {
        clearTimeout(timer)
      }
      console.log('hi')
      this.router.push('/auth')
    },
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
    autoLogout(time: number) {
      timer = setTimeout(() => {
        this.logout()
      }, time * 1000)
    }
  }
})
