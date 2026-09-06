import { CourseCard } from "@/components/courses/course-card";
import getCourses from "@/lib/api/get-courses";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main>
      {/* Header */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight">
            Courses
          </h1>

          <p className="mt-3 text-muted-foreground">
            Explore our courses and start learning something new.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Search courses..."
            className="h-10 flex-1 rounded-md border bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
          />

          <select className="h-10 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring">
            <option value="">All Categories</option>
            <option value="web-development">
              Web Development
            </option>
            <option value="python">
              Python
            </option>
            <option value="java">
              Java
            </option>
            <option value="devops">
              DevOps
            </option>
          </select>
        </div>
      </section>

      {/* Courses */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          {courses.length === 0 ? (
            <div className="rounded-xl border p-10 text-center">
              <h2 className="text-lg font-semibold">
                No courses available
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Check back later for new courses.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  slug={course.slug}
                  title={course.title}
                  image={course.image}
                  description={course.description}
                  price={course.price}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
