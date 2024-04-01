interface IUserSignin {
  email: string
  password: string
}

interface IUserSignup {
  name: string
  email: string
  password: string
  mobile: string
}

interface IUser {
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

interface Menu {
  title: string
  href: string
  icon?: any
  children: Menu[]
}
