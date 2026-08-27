import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Category = {
  name: string;
  description: string;
  slug: string;
};

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group block rounded-xl border bg-card p-6 transition-colors hover:border-primary/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">
            {category.name}
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {category.description}
          </p>
        </div>

        <ArrowRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
      </div>

      <div className="mt-6 text-sm font-medium text-primary">
        Explore courses
      </div>
    </Link>
  );
}