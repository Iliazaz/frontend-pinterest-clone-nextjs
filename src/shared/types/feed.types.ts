import { ICursor } from "./save.interface"

export interface IPostFeed {
  id: string,
  imageURL: string,
  createdAt: string,
  _count: {
    likes: number
  }
}

export interface IFeedLiteResponse {
  success: boolean
  data: {
    posts: IPostFeed[]
    hasNextPage: boolean
    nextCursor: ICursor | null
  }
}
