import { API_URL } from '@/config/api.url'
import { axiosWithAuth } from '@/services/api/interceptor.api'
import { IUpdateUserDto, IUserProfile } from '@/shared/types/user.interface'

class UserService {
  async getProfile(): Promise<IUserProfile> {
    return (await axiosWithAuth.get(API_URL.user('profile'))).data
  }

  async updateProfile(id: string, dto: IUpdateUserDto) {
    const data = await axiosWithAuth.patch(API_URL.user('update'))
  }
}

export const userService = new UserService()
