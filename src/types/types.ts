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
export interface Media {
  public_id: string
  url: string
  resource_type?: string
  access_mode?: string
  folder?: string
  version?: string
  signature: string
}
export interface IUser {
  id?: string
  name: string
  email: string
  password: string
  mobile: string
  avatar: Media | string
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
  images: Media[]
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
  user: IUser
  message: string
  status: Status
  images?: File[]
  createdAt?: Date
}
export type Color = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'default' | 'gray'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export enum Gender {
  male = 'Male',
  female = 'Female',
  unknown = 'Unknown'
}
export enum Proficiency {
  beginer = 'Beginer',
  intermediate = 'Intermediate',
  expert = 'expert'
}
export interface ILanguage {
  code: string
  name: string
  options: {
    read: boolean
    write: boolean
    speak: boolean
  }[]
}
export interface ISocial {
  youtube: string
  twitter: string
  facebook: string
  linkedin: string
  instagram: string
}
export interface IEducation {
  id?: string
  instituteName: string // kic
  degree: string // BCA
  fieldOfStudy: string
  current?: boolean
  activityAndSocial?: string
  from: Date
  to?: Date
  location?: string
  summary?: string
  grade?: string
}
export interface IAward {
  title: string
  rating: number
  image?: string | null
}
export interface IAddress {}
export interface IEmployment {
  id?: string
  company: string // webshree
  designation: string // designer
  summery?: string // i love to work
  location: string // delhi
  from: Date | null // 2013
  to?: Date | null // 2015
  current?: boolean // false
  awards?: IAward[] // ['best employe of the year']
  skills?: string[] // ['html','css','photosho']
}
export interface ISkill {
  title: string
  slug: string
  active?: boolean
}
export interface IProfile {
  id?: string
  user: string
  dob: string
  company: string
  designation: string
  summary: string
  gender: Gender
  exp: string
  location: string
  gitusername: string
  qualification: string
  website: string
  resume?: string
  active: boolean
  social: ISocial
  noticeperiod?: string
  languages: ILanguage[]
  hobbies: string[]
  employment?: IEmployment[]
  education?: IEducation[]
  skills: ISkill[]
}
