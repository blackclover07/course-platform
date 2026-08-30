import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/courses/course-card";
import { courses } from "@/lib/mock-data";
import { FeatureCard } from "@/components/home/feature-card";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Learn. Build. Grow.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Practical courses to help you build real skills and become a
            better developer.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg">
              <Link href="/courses">
                Explore Courses
              </Link>
            </Button>

            <Button size="lg" variant="outline">
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
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
                slug={course.slug}
                title={course.title}
                description={course.description}
                instructor={course.instructor}
                price={course.price}
                rating={course.rating}
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

      {/* Fetaures for choosing us */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Why Learn With Us?
            </h2>

            <p className="mt-3 text-muted-foreground">
              Everything you need to learn practical skills.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Practical Learning"
              description="Learn through practical, project-focused courses designed to help you build real skills."
            />

            <FeatureCard
              title="Quality Instructors"
              description="Learn from instructors who focus on practical knowledge and real-world development."
            />

            <FeatureCard
              title="Learn At Your Pace"
              description="Study whenever you want and progress through courses at your own pace."
            />
          </div>
        </div>
      </section>

      {/*CTA*/}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-2xl border p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold">
            Ready to start learning?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Explore our courses and start building your skills today.
          </p>

          <div className="mt-8">
            <Button size="lg">
              <Link href="/courses">
                Explore Courses
              </Link>

            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
