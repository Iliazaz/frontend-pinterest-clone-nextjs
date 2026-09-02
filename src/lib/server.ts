'use server'

import { cookies, headers } from 'next/headers'

export async function getAccessToken(): Promise<string | null> {
  const cookieStore = await cookies()

  return cookieStore.get('accessToken')?.value || null
}


export async function getRefreshToken(): Promise<string | null> {
  const cookieStore = await cookies()

  return cookieStore.get('refreshToken')?.value || null
}

export async function isAuthenticated() {
  const token = await getAccessToken()

  return !!token
}



export async function getServerAuthStatus() {
  const cookieStore = await cookies()
  const token = cookieStore.get('accessToken')?.value

  if (!token) return { isAuth: false }

  return { isAuth: true }
}

export async function getCurrentUser() {
  try {
    const accessToken = await getRefreshToken()
    
    if (!accessToken) {
      return null
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL + '/auth/@me' || 'http://localhost:4200/api/auth/@me'}`,
      {
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
        cache: 'no-store',
      },
    )

    if (!response.ok) {
      return null
    }

    return response.json()
  } catch (error) {
    console.log(error)
    return null
  }
}
