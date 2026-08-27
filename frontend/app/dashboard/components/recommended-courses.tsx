import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CourseCard from "@/app/courses/components/course-card";

const recommendedCourses = [
  {
    title: "Full-Stack Web Development",
    category: "Development",
    instructor: "John Smith",
    rating: 4.8,
    price: 49,
    image: "/courses/web-development.jpg",
  },
  {
    title: "Modern UI/UX Design",
    category: "Design",
    instructor: "Sarah Johnson",
    rating: 4.9,
    price: 39,
    image: "/courses/ui-ux.jpg",
  },
  {
    title: "Python & Machine Learning",
    category: "Data & AI",
    instructor: "Alex Brown",
    rating: 4.7,
    price: 59,
    image: "/courses/python-ml.jpg",
  },
];

export default function RecommendedCourses() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Explore
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Recommended courses
          </h2>

          <p className="mt-3 text-muted-foreground">
            Discover courses that can help you take your skills further.
          </p>
        </div>

        <Link
          href="/courses"
          className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline md:flex"
        >
          View all
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recommendedCourses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>

      <div className="mt-6 md:hidden">
        <Link
          href="/courses"
          className="flex items-center justify-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View all
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
