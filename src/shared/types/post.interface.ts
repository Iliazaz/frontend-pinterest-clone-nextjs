export interface ICreatePostDto {
  title: string
  dashBoardId: string
  description: string | undefined
}

export interface IPost {
  id: string
  imageURL: string
  title: string
  description: string
  userId: string
  dashBoardId: string
  updatedAt: string
  createdAt: string
}

export interface IUploadPostTextDto {
  title: string
  dashBoardId: string
  description: string | undefined
  imageURL: string | undefined
}

export interface IPostResponse {
    id: string
    posts: IPost[]
}
