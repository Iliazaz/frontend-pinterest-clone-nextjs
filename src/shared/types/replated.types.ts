export interface IReplatedResponse {
  success: boolean
  data: IPinsReplated[]
}

export interface IPinsReplated {
  id: string
  title: string
  description: string
  imageURL: string
  createdAt: string
  userId: string
  dashBoardId: string
  user: {
    id: string
    nickName: string
    avatar: string
  }
  _count: {
    likes: number
    saves: number
    comments: number
  }
}
