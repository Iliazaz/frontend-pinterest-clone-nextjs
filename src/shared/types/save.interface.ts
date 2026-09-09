export type IPageParams = {
  limits: string
  cursor: ICursor
}

export type ICursor = {
  id: string
  createdAt: string
}

export interface IPostSave {
  id: string
  imageURL: string
}

export interface ISavePostResponse {
  success: boolean
  data: {
    posts: IPostSave[]
    nextCursor: null
    hasNextPage: boolean
  }
}

export interface ICreateSave {
  title: string
  imageURL: string
  description: string
  dashBoardId: string
}
