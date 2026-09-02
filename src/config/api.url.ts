export const SERVER_URL = process.env.NEXT_PUBLIC_API_URL

export const API_URL = {
  auth: (url = '') => `/auth/${url}`,
  user: (url = '') => `/user/${url}`,
  feed: (url = '') => `/feed/${url}`,
  save: (url = '') => `/save/${url}`,
  savedashboard: (url = '') => `/savedashboard/${url}`,
  post: (url = '') => `/post/${url}`,
  pin: (url = '') => `/pin/${url}`,
}
