import { authService } from '@/services/endpoints/auth/auth.service'
import { useQuery } from '@tanstack/react-query'

export const useGetMe = () => {
  return useQuery({
    queryKey: ['auth', 'me'],
    queryFn: () => authService.me(),

    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })
}
