import { API_URL } from '@/config/api.url'
import { axiosClassic, axiosWithAuth } from '@/services/api/interceptor.api'
import {
  ICommentsGetAll,
  ICommentsData,
  ICreateCommentsResponse,
  IUpdateCommentsData,
  IRepliesResponse,
} from '@/shared/types/comments.interface'
import { ICursor } from '@/shared/types/save.interface'

class CommentsService {
  async createComments(
    postId: string,
    data: ICommentsData,
  ): Promise<ICreateCommentsResponse> {
    const response = await axiosWithAuth.post(
      API_URL.comments(`/${postId}`),
      data,
    )

    return response.data
  }

  async getAllPostComments(
    postId: string,
    limits: number,
    cursor?: ICursor | null,
  ): Promise<ICommentsGetAll> {
    return (
      await axiosClassic.get(API_URL.comments(`/all/${postId}`), {
        params: {
          limit: limits,
          ...(cursor && {
            id: cursor.id,
            createdAt: cursor.createdAt,
          }),
        },
      })
    ).data
  }

  async getCommentsReplies(
    parentCommentId: string,
    limits: number,
    offset: number,
  ): Promise<IRepliesResponse> {
    return (
      await axiosClassic.get(API_URL.comments(`/${parentCommentId}`), {
        params: {
          limits: limits,
          offset: offset,
          parentCommentId: parentCommentId,
        },
      })
    ).data
  }

  async updateComment(id: string, data: IUpdateCommentsData) {
    return (
      await axiosWithAuth.patch(API_URL.comments('/'), data, {
        params: id,
      })
    ).data
  }

  async deletePostComment(id: string) {
    return (await axiosWithAuth.delete(API_URL.comments(`/${id}/delete`))).data
  }
}

export const commentService = new CommentsService()
