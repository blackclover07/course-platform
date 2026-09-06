import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/courses/course-card";
import getFeaturedCourses from "@/lib/api/get-featured-courses";


export async function FeaturedCourses() {
  const courses = await getFeaturedCourses();

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div>
          <h2 className="text-3xl font-bold">
            Featured Courses
          </h2>

          <p className="mt-3 text-muted-foreground">
            Start learning with some of our popular courses.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline">
            <Link href="/courses">
              View All Courses
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
