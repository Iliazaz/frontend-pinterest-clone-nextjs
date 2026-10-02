import { API_URL } from '@/config/api.url'
import { axiosClassic } from '@/services/api/interceptor.api'
import { IReplatedResponse } from '@/shared/types/replated.types'

class ReplatedService {
  async getRelatedPosts(postId: string, limits: number): Promise<IReplatedResponse> {
    return await axiosClassic.get(API_URL.replated(`/${postId}`), {
      params: {
        limits,
      },
    })
  }
}

export const replatedService = new ReplatedService()
