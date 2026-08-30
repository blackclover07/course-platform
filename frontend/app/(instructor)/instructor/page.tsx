import Link from "next/link";
import { BookOpen, Plus, Users } from "lucide-react";

const courses = [
  {
    title: "Complete Python Course",
    students: 124,
    status: "Published",
  },
  {
    title: "Django REST Framework",
    students: 86,
    status: "Published",
  },
  {
    title: "Modern JavaScript",
    students: 0,
    status: "Draft",
  },
];

export default function InstructorDashboardPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] px-6 py-10">
      <div className="mx-auto w-full max-w-6xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Instructor Portal
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              Dashboard
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Manage your courses and track your students.
            </p>
          </div>

          {/* Create Course */}
          <Link
            href="/instructor/courses/create"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Plus className="mr-2 size-4" />
            Create Course
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          {/* Total Courses */}
          <div className="rounded-xl border p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                Total Courses
              </p>

              <BookOpen className="size-5 text-muted-foreground" />
            </div>

            <p className="mt-3 text-3xl font-bold">
              3
            </p>
          </div>

          {/* Total Students */}
          <div className="rounded-xl border p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                Total Students
              </p>

              <Users className="size-5 text-muted-foreground" />
            </div>

            <p className="mt-3 text-3xl font-bold">
              210
            </p>
          </div>

          {/* Published Courses */}
          <div className="rounded-xl border p-5">
            <p className="text-sm font-medium text-muted-foreground">
              Published Courses
            </p>

            <p className="mt-3 text-3xl font-bold">
              2
            </p>
          </div>
        </div>

        {/* Courses */}
        <section className="mt-10">

          {/* Section Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">
                Your Courses
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Manage the courses you have created.
              </p>
            </div>

            <Link
              href="/instructor/courses"
              className="text-sm font-medium hover:underline"
            >
              View all
            </Link>
          </div>

          {/* Course List */}
          <div className="mt-5 space-y-3">
            {courses.map((course) => (
              <div
                key={course.title}
                className="flex flex-col gap-4 rounded-xl border p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                {/* Course Info */}
                <div>
                  <h3 className="font-semibold">
                    {course.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                    <span>
                      {course.students} students
                    </span>

                    <span
                      className={
                        course.status === "Published"
                          ? "text-green-600"
                          : "text-muted-foreground"
                      }
                    >
                      {course.status}
                    </span>
                  </div>
                </div>

                {/* Manage */}
                <Link
                  href="/instructor/courses"
                  className="inline-flex h-9 items-center justify-center rounded-md border bg-background px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Manage
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
