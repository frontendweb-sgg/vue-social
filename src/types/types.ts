import type { PostStatusEnum, Status } from '@/utils/enums'

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
  id?: string
  name: string
  email: string
  password: string
  mobile: string
  avatar: { url: string }
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
  id?: string
  user?: IUser | string
  content: string
  images: File[]
  code?: string
  videoUrl: File | null
  active?: boolean
  comments?: IComment[]
  likes?: ILike[]
  tags?: string[]
  status?: Status
  postSatus?: PostStatusEnum
  createdAt?: string
}

export interface ILike {
  _id?: string
  id?: string
  user: string
  active: boolean
}

export interface IComment {
  _id?: string
  id?: string
  user?: IUser
  message: string
  status: Status
  images?: File[]
  createdAt?: Date
}
export type Color = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'default' | 'gray'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
