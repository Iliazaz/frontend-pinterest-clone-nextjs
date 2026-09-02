import { IUser } from './user.interface'

export interface IAuthLoginForm {
  email: string
  password: string
}

export interface IAuthLoginForm {
  email: string
  password: string
}

export interface IAuthRegisterForm {
  email: string
  password: string
  nickName?: string
  avatar?: File | string
}

export interface IAuthResponse {
  success: boolean
  data: { user: IUser; accessToken: string; refreshToken: string }
}

export interface IRefreshMethod {
  accessToken: string
  refreshToken: string
}

export interface IAuthMe {
  id: string
  email: string
  password: string
  nickName: string
  avatar: string
  updatedAt: string
  createdAt: string
}

export interface IAuthLogout {
  message: string
}
