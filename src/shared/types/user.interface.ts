export interface IUser {
  id: string
  email: string
  password: string
  nickName: string
  avatar: string
  updatedAt: string
  createdAt: string
}

export interface IUserProfile {
  success: boolean
  data: IUser
}

export interface IUpdateUserDto {
  email: string
  nickName: string
  avatar: string | undefined // ??????????
}
