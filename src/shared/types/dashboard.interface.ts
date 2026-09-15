export interface ICreateDashBoard {
  name: string
  description: string
  isPrivate: boolean
}

export interface IDashBoardResponse {
  id: string
  name: string
  description: string
  isPrivate: boolean
  posts: {
    id: string,
    imageURL: string
  }[]
  userId: string
  createdAt: string
}
