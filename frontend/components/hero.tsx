import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-16 lg:py-24">
      <div className="grid w-full items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Learn. Build. Grow.
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Learn skills.
            <br />
            <span className="text-primary">Build your future.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Learn practical skills from expert instructors through
            courses designed to help you build real-world projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg">
              <Link
                href="/courses"
                className="flex items-center gap-2"
              >
                Explore Courses
                <ArrowRight className="size-4" />
              </Link>
            </Button>

            <Button variant="outline" size="lg">
              <Link href="/register">
                Get Started
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block">
          {/* Dashboard Card */}
          <div className="relative mx-auto max-w-md rounded-2xl border bg-card p-6 shadow-lg shadow-primary/5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  My Learning
                </p>

                <h2 className="mt-1 text-xl font-semibold">
                  Continue learning
                </h2>
              </div>

              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="size-5 text-primary" />
              </div>
            </div>

            {/* First Course */}
            <div className="mt-8 rounded-xl border bg-background p-4">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <PlayCircle className="size-6 text-primary" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">
                        React Fundamentals
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        Frontend Development
                      </p>
                    </div>

                    <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">
                    Progress
                  </span>

                  <span className="font-medium">
                    75%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[75%] rounded-full bg-primary" />
                </div>
              </div>
            </div>

            {/* Second Course */}
            <div className="mt-4 rounded-xl border bg-background p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">
                    Django REST API
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Backend Development
                  </p>
                </div>

                <span className="text-sm font-medium text-primary">
                  45%
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[45%] rounded-full bg-primary" />
              </div>
            </div>
          </div>

          {/* Floating Statistic */}
          <div className="absolute -bottom-6 -left-8 rounded-xl border bg-background px-4 py-3 shadow-lg">
            <p className="text-xs text-muted-foreground">
              Learning streak
            </p>

            <p className="mt-1 font-semibold">
              12 days 🔥
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-8 -top-8 -z-10 size-40 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute -bottom-12 -right-12 -z-10 size-48 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
