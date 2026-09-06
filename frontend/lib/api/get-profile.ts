import { StudentProfile } from "@/types/auth";

export default async function getProfile(
  accessToken: string
): Promise<StudentProfile> {
  const response = await fetch(
    `${process.env.DJANGO_API_URL}/api/auth/profile/`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  return response.json();
}
