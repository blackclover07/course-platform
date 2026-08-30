import Link from "next/link";
import { notFound } from "next/navigation";

import { courseDetails } from "@/lib/mock-data";

type CourseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { slug } = await params;

  const course = courseDetails[slug as keyof typeof courseDetails];

  if (!course) {
    notFound();
  }

  return (
    <main>
      {/* Course Header */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">
              {course.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {course.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {course.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <span>⭐ {course.rating}</span>
              <span>{course.students.toLocaleString()} students</span>
              <span>{course.duration}</span>
              <span>{course.level}</span>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Created by{" "}
              <span className="font-medium text-foreground">
                {course.instructor}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_360px]">
          {/* Left */}
          <div>
            {/* What You'll Learn */}
            <div>
              <h2 className="text-2xl font-bold">
                What you'll learn
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {course.whatYouWillLearn.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 text-sm"
                  >
                    <span className="mt-0.5">✓</span>

                    <span className="text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold">
                Course Description
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                {course.description} This course takes you through
                the fundamentals and gradually moves into more
                advanced concepts. You'll work with practical
                examples and learn how to build APIs that can be
                used in real-world applications.
              </p>
            </div>

            {/* Course Content */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold">
                Course Content
              </h2>

              <div className="mt-6 space-y-4">
                {course.sections.map((section, index) => (
                  <div
                    key={section.title}
                    className="rounded-lg border"
                  >
                    <div className="flex items-center justify-between p-5">
                      <div>
                        <p className="font-semibold">
                          {index + 1}. {section.title}
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {section.lessons.length} lessons
                        </p>
                      </div>

                      <span className="text-muted-foreground">
                        +
                      </span>
                    </div>

                    <div className="border-t px-5 py-4">
                      <ul className="space-y-3">
                        {section.lessons.map((lesson) => (
                          <li
                            key={lesson}
                            className="text-sm text-muted-foreground"
                          >
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold">
                Requirements
              </h2>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-muted-foreground">
                {course.requirements.map((requirement) => (
                  <li key={requirement}>
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Purchase Card */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="overflow-hidden rounded-xl border bg-background shadow-sm">
              {/* Image */}
              <div className="aspect-video bg-muted" />

              <div className="p-6">
                <p className="text-3xl font-bold">
                  ₹{course.price}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Lifetime access to this course
                </p>

                <button className="mt-6 w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
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