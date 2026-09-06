import Link from "next/link";
import getCategories from "@/lib/api/get-categories";

export default async function CategoriesPage() {

  const categories = await getCategories();
  return (
    <main>
      {/* Header */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight">
            Categories
          </h1>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Explore courses by category and find the right path
            for your learning journey.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/courses?category=${category.slug}`}
              className="group rounded-xl border p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold">
                  {category.name}
                </h2>

                <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {category.description}
              </p>

              <p className="mt-6 text-sm font-medium">
                {/*{category.courseCount} courses*/}
                future
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-2xl border p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold">
            Can't decide what to learn?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Browse all of our courses and find something that
            interests you.
          </p>

          <Link
            href="/courses"
            className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse Courses
          </Link>
        </div>
      </section>
    </main>
  );
}
