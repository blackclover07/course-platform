import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground ring-1 ring-primary/20 sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to start learning?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
          Join thousands of learners and start building the skills
          you need for your future.
        </p>

        <div className="mt-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
          >
            Explore Courses
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
