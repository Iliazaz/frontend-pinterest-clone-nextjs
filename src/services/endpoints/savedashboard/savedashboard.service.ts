import { API_URL } from '@/config/api.url'
import { axiosWithAuth } from '@/services/api/interceptor.api'

class SaveDashBoardService {
  async getSaveDashboard(limits: number, cursor: { id: string }) {
    return (
      await axiosWithAuth.get(API_URL.dashboard('/save'), {
        params: {
          limits,
          ...(cursor && {
            id: cursor.id,
          }),
        },
      })
    ).data
  }

  async saveDashBoard(id: string) {
    const response = await axiosWithAuth.post(API_URL.dashboard(`$/save/${id}`))

    return response.data
  }

  async deleteSaveDashBoard(id: string) {
    return (await axiosWithAuth.delete(API_URL.dashboard(`/delete/${id}/save`)))
      .data
  }
}

export const saveDashBoardService = new SaveDashBoardService()
