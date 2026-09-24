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

export interface IUserComments {
  id: true
  avatar: true
  nickName: true
}

export interface IUpdateUserDto {
  email: string
  nickName: string
  avatar: string | undefined // ??????????
}
