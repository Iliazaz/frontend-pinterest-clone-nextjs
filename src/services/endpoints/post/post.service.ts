import { API_URL } from '@/config/api.url'
import { axiosClassic, axiosWithAuth } from '@/services/api/interceptor.api'
import {
  ICreatePostDto,
  IUploadPostTextDto,
} from '@/shared/types/post.interface'

class PostService {
  async createPost(data: ICreatePostDto) {
    const response = await axiosWithAuth.post(API_URL.post('/'), data)

    return response.data
  }

  async uploadsPostText(postId: string, data: IUploadPostTextDto) {
    const response = await axiosWithAuth.patch(
      API_URL.post(`/update/${postId}/input`),
      data,
    )

    return response.data
  }

  async updateImageURL(postId: string, imageUrl: File) {
    const formData = new FormData()

    formData.append('avatar', imageUrl)

    const response = await axiosWithAuth.patch(
      API_URL.post(`/update/${postId}/image`),
      formData,
    )

    return response.data
  }

  async deletePost(id: string) {
    return (await axiosWithAuth.delete(`/delete/${id}`)).data
  }

  async getPostAllIsUser() {
    return (await axiosWithAuth.get(API_URL.post('/all'))).data
  }

  async getPostIsUser() {
    return (await axiosWithAuth.get(API_URL.post('/user'))).data
  }

  async getPostIsUserPrivate() {
    return (await axiosWithAuth.get(API_URL.post('/user/isPrivate'))).data
  }

  async getByIdPost(id: string) {
    return (await axiosWithAuth.get(API_URL.post(`/byId/${id}`))).data
  }

  async likePost(id: string) {
    return (await axiosWithAuth.post(API_URL.post(`/${id}/like`))).data
  }

  async likeDeletePost(id: string) {
    return (await axiosWithAuth.delete(API_URL.post(`/${id}/like`))).data
  }
}

export const postService = new PostService()
