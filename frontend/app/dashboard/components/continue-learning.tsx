import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";


const courses = [
  {
    title: "React Fundamentals",
    category: "Frontend Development",
    progress: 75,
  },
  {
    title: "Django REST API",
    category: "Backend Development",
    progress: 45,
  },
  {
    title: "Python & Machine Learning",
    category: "Data & AI",
    progress: 30,
  },
];

export default function ContinueLearning() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Keep learning
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Continue learning
          </h2>
        </div>

        <Link
          href="/dashboard/courses"
          className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline md:flex"
        >
          View all
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.title}
            className="rounded-xl border bg-card p-5"
          >
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <PlayCircle className="size-6 text-primary" />
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold">
                  {course.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {course.category}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">
                  Progress
                </span>

                <span className="font-medium">
                  {course.progress}%
                </span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>

            <Link
              href="/courses/react-fundamentals"
              className="mt-6 flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Continue Learning
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-6 md:hidden">
        <Link
          href="/dashboard/courses"
          className="flex items-center justify-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View all
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
