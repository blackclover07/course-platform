import { CourseDetail } from "@/types/course";

export default async function getCourse(
  id: string
): Promise<CourseDetail> {
  const response = await fetch(
    `${process.env.DJANGO_API_URL}/api/all-courses/${id}/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch course");
  }

  return response.json();
}
