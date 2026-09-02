import { API_URL } from '@/config/api.url'
import { axiosWithAuth } from '@/services/api/interceptor.api'

class SaveService {
  async getSavePin(limits: string, cursor: { id: string; createdAt: string }) {
    return (
      await axiosWithAuth.get(API_URL.save(`/post`), {
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

  async savePost(id: string) {
    const response = await axiosWithAuth.post(API_URL.save(`${id}/post`))

    return response.data
  }

  async deleteSavePost(id: string) {
    return await axiosWithAuth.delete(API_URL.save(`/${id}/delete/post`))
  }
}

export const saveService = new SaveService()
