import { NextResponse } from "next/server";
import { LoginRequest, LoginResponse } from "@/types/auth";

export async function POST(request: Request) {
  try {
    const data: LoginRequest = await request.json();

    const response = await fetch(
      `${process.env.DJANGO_API_URL}/api/auth/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: response.status }
      );
    }

    const tokens: LoginResponse = await response.json();

    const nextResponse = NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );

    nextResponse.cookies.set("access_token", tokens.access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    });

    nextResponse.cookies.set("refresh_token", tokens.refresh, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return nextResponse;
  } catch {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}