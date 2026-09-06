import { LoginRequest, LoginResponse } from "@/types/auth";

export default async function login(
  data: LoginRequest
): Promise<LoginResponse> {
  const response = await fetch("/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  return response.json();
}


