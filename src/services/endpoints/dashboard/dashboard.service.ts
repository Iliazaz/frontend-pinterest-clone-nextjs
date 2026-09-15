import { API_URL } from '@/config/api.url'
import { axiosClassic, axiosWithAuth } from '@/services/api/interceptor.api'
import {
  ICreateDashBoard,
  IDashBoardResponse,
} from '@/shared/types/dashboard.interface'

class DashBoardService {
  async getAll(): Promise<IDashBoardResponse[]> {
    return (await axiosClassic.get(API_URL.dashboard())).data.data
  }

  async getAllIsPrivate(): Promise<IDashBoardResponse[]> {
    return (await axiosWithAuth.get(API_URL.dashboard('/isPrivate'))).data.data
  }

  async getById(id: string) {
    return await axiosClassic.get(API_URL.dashboard(`/byId/${id}`))
  }

  async getByIdIsPrivate(id: string) {
    return (await axiosWithAuth.get(API_URL.dashboard(`/byId/${id}/isPrivate`)))
      .data
  }

  async createDashBoard(data: ICreateDashBoard) {
    const response = await axiosWithAuth.post(API_URL.dashboard('/'), data)

    return response.data
  }

  async deleteDashboard(id: string) {
    return (await axiosWithAuth.delete(API_URL.dashboard(`/delete/${id}`))).data
  }
}

export const dashBoardService = new DashBoardService()
