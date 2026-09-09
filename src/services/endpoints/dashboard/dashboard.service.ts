import { API_URL } from '@/config/api.url'
import { axiosClassic, axiosWithAuth } from '@/services/api/interceptor.api'
import { ICreateDashBoard } from '@/shared/types/dashboard.interface'

class DashBoardService {
  async getAll() {
    return (await axiosClassic.get(API_URL.dashboard())).data
  }

  async getAllIsPrivate() {
    return (await axiosWithAuth.get(API_URL.dashboard('/isPrivate'))).data
  }

  async getById(id: string) {
    return await axiosClassic.get(API_URL.dashboard(`/byId/${id}`))
  }

  async getByIdIsPrivate(id: string) {
    return (await axiosWithAuth.get(API_URL.dashboard(`/byId/${id}/isPrivate`)))
      .data
  }

  async getCreateDashBoard(data: ICreateDashBoard) {
    const response = await axiosWithAuth.post(API_URL.dashboard('/'), data)

    return response.data
  }

  async deleteSaveDashBoard(id: string) {
    return (await axiosWithAuth.delete(API_URL.dashboard(`/delete/${id}/save`)))
      .data
  }
}

export const dashBoardService = new DashBoardService()
