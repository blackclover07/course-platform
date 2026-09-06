import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import getCourses from "@/lib/api/get-courses";
import getCourse from "@/lib/api/get-course";

type CourseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { slug } = await params;

  // Get lightweight course list
  let courses;

  try {
    courses = await getCourses();
  } catch {
    notFound();
  }

  // Find course using the slug from the URL
  const course = courses.find(
    (course) => course.slug === slug
  );

  if (!course) {
    notFound();
  }

  // Now send the course ID to Django
  let courseDetail;

  try {
    courseDetail = await getCourse(course.id);
  } catch {
    notFound();
  }

  return (
    <main>
      {/* Course Header */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {courseDetail.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {courseDetail.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_360px]">
          {/* Left */}
          <div>
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold">
                Course Description
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                {courseDetail.description}
              </p>
            </section>

            {/* Course Content */}
            <section className="mt-14">
              <h2 className="text-2xl font-bold">
                Course Content
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                {courseDetail.sections.length} sections
              </p>

              <div className="mt-6 space-y-4">
                {courseDetail.sections.map((section, index) => (
                  <div
                    key={section.id}
                    className="overflow-hidden rounded-lg border"
                  >
                    {/* Section */}
                    <div className="flex items-center justify-between p-5">
                      <div>
                        <p className="font-semibold">
                          {index + 1}. {section.title}
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {section.description}
                        </p>

                        <p className="mt-2 text-xs text-muted-foreground">
                          {section.lessons.length} lessons
                        </p>
                      </div>

                      <span className="text-xl text-muted-foreground">
                        +
                      </span>
                    </div>

                    {/* Lessons */}
                    <div className="border-t px-5 py-4">
                      <ul className="space-y-3">
                        {section.lessons.map(
                          (lesson, lessonIndex) => (
                            <li
                              key={lesson.id}
                              className="flex items-center gap-3 text-sm"
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs">
                                {lessonIndex + 1}
                              </span>

                              <span className="text-muted-foreground">
                                {lesson.title}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Purchase Card */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="overflow-hidden rounded-xl border bg-background shadow-sm">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={courseDetail.image}
                  alt={courseDetail.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-3xl font-bold">
                  ₹{courseDetail.price}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Lifetime access to this course
                </p>

                <button
                  type="button"
                  className="mt-6 w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Enroll Now
                </button>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  You can start learning immediately after
                  enrollment.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Back to Courses */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/courses"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            ← Back to Courses
          </Link>
        </div>
      </section>
    </main>
  );
}