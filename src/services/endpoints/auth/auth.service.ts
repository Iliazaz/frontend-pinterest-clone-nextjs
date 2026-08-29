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
import { removeTokenStorage, SaveTokenStorage } from './auth-tokens.service'

class AuthService {
  async login(data: IAuthLoginForm) {
    const response = await axiosClassic.post<IAuthResponse>(
      API_URL.auth('login'),
      data,
    )

    if (response.data.data.accessToken) {
      SaveTokenStorage(response.data.data.accessToken)
    }

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

    if (response.data.data.accessToken) {
      SaveTokenStorage(response.data.data.accessToken)
    }

    return response.data
  }

  async refresh() {
    const response = await axiosWithAuth.post<IRefreshMethod>(
      API_URL.auth('refresh'),
    )

    if (response.data.accessToken) {
      SaveTokenStorage(response.data.accessToken)
    }

    return response.data
  }

  async me() {
    return (await axiosWithAuth.get<IAuthMe>(API_URL.auth('@me'))).data
  }

  async logout() {
    const response = await axiosClassic.post<IAuthLogout>(
      API_URL.auth('logout'),
    )

    if (response.data) {
      removeTokenStorage()
    }

    return response
  }
}

export const authService = new AuthService()
