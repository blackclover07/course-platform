import Link from "next/link";
import CourseCard from "../app/courses/components/course-card";
import { ArrowRight } from "lucide-react";

const courses = [
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

export default function FeaturedCourses() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Courses
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured courses
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Learn from carefully selected courses created by
            experienced instructors.
          </p>
        </div>

        <Link
          href="/courses"
          className="flex items-center gap-2 text-sm font-medium text-primary"
        >
          View all courses
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link
          href="/courses"
          className="text-sm font-medium"
        >
          View all courses →
        </Link>
      </div>
    </section>
  );
}
