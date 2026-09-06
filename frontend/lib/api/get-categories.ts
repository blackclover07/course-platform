import { Category } from "@/types/category";

export default async function getCategories(): Promise<Category[]>{
  const response = await fetch(`${process.env.DJANGO_API_URL}/api/all-categories/`,
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
