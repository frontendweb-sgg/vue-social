import type { Status } from '@/utils/enums'

export interface IUserSignin {
  email: string
  password: string
}

export interface IUserSignup {
  name: string
  email: string
  password: string
  mobile: string
}

export interface IUser {
  name: string
  email: string
  password: string
  mobile: string
  avatar: string
  role: string
  active: string
  emailVerify: boolean
  accessToken: string
}

export interface Menu {
  title: string
  href: string
  icon?: any
  children?: Menu[]
}

export interface IPost {
  id: string
  user: string
  title: string
  slug: string
  description: string
  active: boolean
  images: string[]
  comments: IComment[]
  likes: ILike[]
}

export interface ILike {
  user: string
  active: boolean
}

export interface IComment {
  user: string
  message: string
  status: Status
}
