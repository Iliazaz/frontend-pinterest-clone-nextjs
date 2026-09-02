import {
  IAuthLoginForm,
  IAuthLogout,
  IAuthMe,
  IAuthRegisterForm,
  IAuthResponse,
  IRefreshMethod,
} from '@/shared/types/auth.interface'
import { axiosClassic, axiosWithAuth } from '../../api/interceptor.api'
import { API_URL } from '@/config/api.url'

class AuthService {
  async login(data: IAuthLoginForm) {
    const response = await axiosClassic.post<IAuthResponse>(
      API_URL.auth('login'),
      data,
    )

    console.log(response.data)

    return response.data
  }

  async register(data: IAuthRegisterForm) {
    const formData = new FormData()

    formData.append('email', data.email)
    formData.append('password', data.password)

    if (data.nickName) {
      formData.append('nickName', data.nickName)
    }

    if (data.avatar) {
      formData.append('avatar', data.avatar)
    }

    const response = await axiosClassic.post<IAuthResponse>(
      API_URL.auth('register'),
      formData,
    )

    return response.data
  }

  async refresh() {
    const response = await axiosClassic.post<IRefreshMethod>(
      API_URL.auth('refresh'),
    )
    
    return response.data
  }

  async me() {
    return (await axiosWithAuth.get<IAuthMe>(API_URL.auth('@me'))).data
  }

  async logout() {
    const response = await axiosClassic.post<IAuthLogout>(
      API_URL.auth('logout'),
    )

    return response
  }
}

export const authService = new AuthService()
