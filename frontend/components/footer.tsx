import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight"
            >
              CourseHub
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-primary-foreground/70">
              Learn practical skills, build real projects, and grow
              your career with courses designed for real-world
              development.
            </p>

            <Link
              href="/courses"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-80"
            >
              Explore Courses
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold">
              Platform
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link
                  href="/courses"
                  className="transition-colors hover:text-primary-foreground"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="transition-colors hover:text-primary-foreground"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-primary-foreground"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-primary-foreground"
                >
                  Privacy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-primary-foreground"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 CourseHub. All rights reserved.
          </p>

          <p className="font-medium text-primary-foreground/70">
            Learn. Build. Grow.
          </p>
        </div>
      </div>
    </footer>
  );
}
