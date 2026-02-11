import { NextRequest, NextResponse } from 'next/server';

// Public routes that don't require authentication
const publicRoutes = ['/auth/login', '/'];

// Protected routes that require authentication
const protectedRoutes = ['/dashboard'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Get the auth token from cookies
  const token = request.cookies.get('accessToken')?.value;
  
  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(route)
  );
  
  // If trying to access a protected route without a token, redirect to login
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  
  // If user is authenticated and tries to access login page, redirect to dashboard
  if (pathname === '/auth/login' && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // If user is authenticated and tries to access home page, redirect to dashboard
  if (pathname === '/' && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

// If user is not authenticated and tries to access home page, redirect to login
  if (pathname === '/' && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }


  
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};
