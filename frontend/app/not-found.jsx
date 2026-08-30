import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-12">
      <div className="mx-auto w-full max-w-5xl">

        {/* Hero Image */}
        <div className="relative h-64 overflow-hidden rounded-2xl border sm:h-80 md:h-96">
          <Image
            src="/images/not-found.jpg"
            alt="Page not found"
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            quality={100}
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Image Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-6xl font-bold tracking-tight text-white drop-shadow-lg sm:text-7xl">
              404
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-xl text-center">

          {/* Icon */}
          <div className="mx-auto mt-8 flex size-14 items-center justify-center rounded-2xl bg-primary/10">
            <BookOpen className="size-7 text-primary" />
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Page not found
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            The page you're looking for doesn't exist or may have
            been moved. Let's get you back to learning.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <ArrowLeft className="mr-2 size-4" />
              Back to Home
            </Link>

            <Link
              href="/courses"
              className="inline-flex h-10 items-center justify-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <BookOpen className="mr-2 size-4" />
              Browse Courses
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
}
