import { QueryClient } from '@tanstack/react-query'

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount: number, error: any) => {
        const status = error?.response?.status
        if (status === 401 || status === 409) {
          console.warn('Ошибка в запросе')
          return false
        }
        return failureCount < 2
      },
      refetchOnWindowFocus: (query) => {
        const error = query.state.error as any
        if (error?.response?.status === 401 || error?.response?.status === 409)
          return false
        return true
      },
    },  
    mutations: {
      onError: (error: any) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 409
        ) {
          console.warn('401 ошибка в мутации')
        }
      },
    },
  },
})
