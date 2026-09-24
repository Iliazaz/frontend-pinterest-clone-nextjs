import { ICursor } from './save.interface'
import { IUserComments } from './user.interface'

export interface ICommentsData {
  text: string
  parentCommentId?: string
}

export interface IUpdateCommentsData {
  text: string
}

export interface IReplies {
  take: number
  id: string
  createdAt: string
  text: string
  user: IUserComments
}

export interface IComments {
  id: string
  postId: string
  text: string
  createdAt: string
  user: IUserComments

  replies: IReplies[]
  _count: {
    replies: number
  }
}

export interface ICreateCommentsResponse {
  id: string
  createdAt: string
  text: string
  user: IUserComments
  replies: IReplies[]
}

export interface ICommentsGetAll {
  success: true
  data: {
    comments: IComments[]
    hasNextPage: boolean
    nextCursor: ICursor | null
  }
}

export interface IRepliesResponse {
  id: true
  text: true
  createdAt: true
  user: IUserComments
}
