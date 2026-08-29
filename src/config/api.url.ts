export const SERVER_URL = process.env.NEXT_PUBLIC_API_URL

export const API_URL = {
  auth: (url = '') => `/auth/${url}`,
  user: (url = '') => `/user/${url}`,
  feed: (url = '') => `/feed/${url}`,
}
