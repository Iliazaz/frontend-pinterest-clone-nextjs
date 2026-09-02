import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const accessToken = request.cookies.get('accessToken')?.value
  const refreshToken = request.cookies.get('refreshToken')?.value

  const protectedRoutes = [
    '/dashboard',
    '/myboard',
    '/myboard/:path',
    '/settings',
  ]

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  )

  if (isProtectedRoute && !accessToken && !refreshToken) {
    const loginUrl = new URL('/auth', request.url)

    loginUrl.searchParams.set('redirect', pathname)

    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/myboard/:path*', '/settings/:path*'],
}
