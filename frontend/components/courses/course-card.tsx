import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

import { Course } from "@/types/course";

type CourseCardProps = Course;

export function CourseCard({
  slug,
  title,
  description,
  price,
  image,
}: CourseCardProps) {

  return (
    <Link
      href={`/courses/${slug}`}
      className="group overflow-hidden rounded-xl border transition-shadow hover:shadow-md"
    >
      {/* Course Image */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-sm text-muted-foreground">
              No image available
            </span>
          </div>
        )}
      </div>

      {/* Course Information */}
      <div className="p-5">
        <h3 className="text-lg font-semibold group-hover:underline">
          {title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <Badge variant="secondary">
            Course
          </Badge>

          <span className="font-semibold">
            ₹{price}
          </span>
        </div>
      </div>
    </Link>
  );
}
