import { Course } from "@/types/course";

export default async function getFeaturedCourses(): Promise<Course[]> {
  const response = await fetch(
    `${process.env.DJANGO_API_URL}/api/courses/featured/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch featured courses");
  }

  return response.json();
}
