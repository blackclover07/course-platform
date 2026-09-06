import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  const refreshToken = request.cookies.get("refresh_token")?.value;

  // User has a valid access token
  if (accessToken) {
    return NextResponse.next();
  }

  // No access token, but refresh token exists
  if (refreshToken) {
    try {
      const refreshUrl = new URL("/api/auth/refresh", request.url);

      const response = await fetch(refreshUrl, {
        method: "POST",
        headers: {
          Cookie: request.headers.get("cookie") ?? "",
        },
      });

      if (response.ok) {
        const nextResponse = NextResponse.next();

        const setCookie = response.headers.get("set-cookie");

        if (setCookie) {
          nextResponse.headers.set("set-cookie", setCookie);
        }

        return nextResponse;
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
    }
  }

  // No valid session
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/certificates/:path*",
    "/instructor/:path*",
  ],
};
