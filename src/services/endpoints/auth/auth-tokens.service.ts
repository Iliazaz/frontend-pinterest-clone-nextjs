import Cookies from 'js-cookie'

export enum EnumTokens {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken',
}

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

  return accessToken || null
}

export const SaveTokenStorage = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: process.env.NEXT_PUBLIC_API_URL,
    sameSite: 'strict',
    expires: 1,
  })
 
}

export const removeTokenStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
