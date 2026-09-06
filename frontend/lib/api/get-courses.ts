import { Course } from "@/types/course";

export default async function getCourses(): Promise<Course[]>{
  const response = await fetch(`${process.env.DJANGO_API_URL}/api/all-courses/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },);

  if (!response.ok) {
    throw new Error("Failed to fetch courses")
  }
  return response.json()
}
