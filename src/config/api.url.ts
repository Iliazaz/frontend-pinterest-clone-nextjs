export const SERVER_URL = process.env.NEXT_PUBLIC_API_URL

export const API_URL = {
  auth: (url = '') => `/auth/${url}`,
  user: (url = '') => `/user/${url}`,
  feed: (url = '') => `/feed${url}`,
  save: (url = '') => `/save${url}`,
  dashboard: (url = '') => `/dashboard${url}`,
  post: (url = '') => `/post${url}`,
  pin: (url = '') => `/pin${url}`,
}
