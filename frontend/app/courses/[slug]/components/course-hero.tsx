import Image from "next/image";
import { Star } from "lucide-react";

export default function CourseHero() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Course Information */}
          <div>
            <span className="inline-flex rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Development
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Full-Stack Web Development
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Learn how to build modern full-stack applications
              using frontend, backend, databases, and APIs.
            </p>

            {/* Rating */}
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
              <div className="flex items-center gap-1">
                <Star className="size-4 fill-primary text-primary" />

                <span className="font-semibold">4.8</span>

                <span className="text-muted-foreground">
                  (2,450 reviews)
                </span>
              </div>

              <span className="text-muted-foreground">
                12,450 students
              </span>
            </div>

            {/* Instructor */}
            <p className="mt-5 text-sm text-muted-foreground">
              Created by{" "}
              <span className="font-medium text-foreground">
                John Smith
              </span>
            </p>
          </div>

          {/* Course Image */}
          <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
            <Image
              src="/courses/web-development.jpg"
              alt="Full-Stack Web Development"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}