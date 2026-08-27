import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

type Course = {
  title: string;
  category: string;
  instructor: string;
  rating: number;
  price: number;
  image: string;
};

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
      {/* Course Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-md bg-background/95 px-3 py-1 text-xs font-medium text-primary shadow-sm">
          {course.category}
        </span>
      </div>

      {/* Course Information */}
      <div className="p-5">
        <h3 className="line-clamp-2 text-lg font-semibold leading-6">
          {course.title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          By {course.instructor}
        </p>

        {/* Rating + Price */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="size-4 fill-primary text-primary" />

            <span className="text-sm font-medium">
              {course.rating}
            </span>
          </div>

          <span className="text-lg font-bold">
            ${course.price}
          </span>
        </div>

        {/* Action */}
        <Link
          href="/courses"
          className="mt-5 flex items-center justify-center gap-2 rounded-md border py-2.5 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          View Course
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
