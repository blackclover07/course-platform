import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About CourseHub
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A simple learning platform built to help people learn
            practical skills and build real-world knowledge.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">
            Our Mission
          </h2>

          <p className="mt-6 leading-7 text-muted-foreground">
            We believe learning should be practical, accessible, and
            focused on skills that can actually be used. CourseHub
            provides courses that help learners understand concepts,
            practice what they learn, and continue improving.
          </p>

          <p className="mt-4 leading-7 text-muted-foreground">
            Our goal is to create a straightforward platform where
            learners can discover useful courses and instructors can
            share their knowledge.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              What We Offer
            </h2>

            <p className="mt-3 text-muted-foreground">
              Everything starts with learning something useful.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-6">
              <h3 className="text-lg font-semibold">
                Practical Courses
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Learn through courses focused on useful concepts,
                practical skills, and real-world applications.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="text-lg font-semibold">
                Quality Content
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Discover structured courses created by instructors
                who want to share their knowledge and experience.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="text-lg font-semibold">
                Learn At Your Pace
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Learn whenever you want and progress through courses
                at a pace that works for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-2xl border p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold">
            Ready to start learning?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Explore our courses and find something new to learn.
          </p>

          <Link
            href="/courses"
            className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore Courses
          </Link>
        </div>
      </section>
    </main>
  );
}