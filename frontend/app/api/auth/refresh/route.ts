import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const refreshToken = request.cookies.get("refresh_token")?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { error: "Refresh token not found" },
        { status: 401 }
      );
    }

    const response = await fetch(
      `${process.env.DJANGO_API_URL}/api/auth/refresh/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh: refreshToken,
        }),
      }
    );

    if (!response.ok) {
      const res = NextResponse.json(
        { error: "Session expired" },
        { status: 401 }
      );

      res.cookies.delete("access_token");
      res.cookies.delete("refresh_token");

      return res;
    }

    const data = await response.json();

    const res = NextResponse.json({
      success: true,
    });

    res.cookies.set("access_token", data.access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    });

    return res;
  } catch (error) {
    console.error("Refresh token error:", error);

    return NextResponse.json(
      { error: "Unable to refresh session" },
      { status: 500 }
    );
  }
}
