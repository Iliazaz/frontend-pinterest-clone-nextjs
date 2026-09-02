import axios, { CreateAxiosDefaults } from 'axios'
import { errorCatch } from './error.api'
import { authService } from '../endpoints/auth/auth.service'

const options: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4200/api',
  withCredentials: true,
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

let refreshPromise: Promise<void> | null = null

axiosWithAuth.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config

    if (!originalRequest) {
      return Promise.reject(error)
    }

    const status = error.response?.status

    const isAuthError =
      status === 401 ||
      errorCatch(error) === 'jwt expired' ||
      errorCatch(error) === 'jwt must be provided'

    if (!isAuthError) {
      return Promise.reject(error)
    }

    if (originalRequest._isRetry) {
      return Promise.reject(error)
    }

    if (originalRequest.url?.includes('/auth/refresh')) {
      return Promise.reject(error)
    }

    // @me теперь проверяется сервером
    // и не должен запускать refresh через interceptor
    if (originalRequest.url?.includes('/auth/@me')) {
      return Promise.reject(error)
    }

    originalRequest._isRetry = true

    try {
      if (!refreshPromise) {
        refreshPromise = authService
          .refresh()
          .then(() => undefined)
          .finally(() => {
            refreshPromise = null
          })
      }

      await refreshPromise

      return axiosWithAuth.request(originalRequest)
    } catch (refreshError) {
      refreshPromise = null

      try {
        await authService.logout()
      } catch (logoutError) {
        console.error('Logout error:', logoutError)
      }

      return Promise.reject(refreshError)
    }
  },
)

export { axiosClassic, axiosWithAuth }
