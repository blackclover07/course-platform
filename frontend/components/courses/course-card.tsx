import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type CourseCardProps = {
  slug: string;
  title: string;
  description: string;
  instructor: string;
  category: string;
  price: number;
  rating: number;
};

export function CourseCard({
  slug,
  title,
  description,
  instructor,
  category,
  price,
  rating,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${slug}`}
      className="group overflow-hidden rounded-xl border transition-shadow hover:shadow-md"
    >
      {/* Course Image */}
      <div className="relative aspect-video bg-muted">
        <Badge className="absolute left-3 top-3">
          {category}
        </Badge>
      </div>

      {/* Course Information */}
      <div className="p-5">
        <h3 className="text-lg font-semibold group-hover:underline">
          {title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>

        <p className="mt-4 text-sm text-muted-foreground">
          {instructor}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm">⭐ {rating}</span>

          <span className="font-semibold">
            ₹{price}
          </span>
        </div>
      </div>
    </Link>
  );
}