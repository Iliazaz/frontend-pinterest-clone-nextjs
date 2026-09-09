import { API_URL } from '@/config/api.url'
import { axiosClassic } from '@/services/api/interceptor.api'
import { IFeedLiteResponse } from '@/shared/types/feed.types'
import { ICursor } from '@/shared/types/save.interface'

class FeedService {
  async getRecommendedFeedIsNotAuth(
    limits: number,
    cursor?: ICursor | null,
  ): Promise<IFeedLiteResponse> {
    return (
      await axiosClassic.get(API_URL.feed('/lite'), {
        params: {
          limits: limits,
          ...(cursor && {
            id: cursor.id,
            createdAt: cursor.createdAt,
          }),
        },
      })
    ).data
  }
}

export const feedService = new FeedService()
