import Image from "next/image";
import { Star } from "lucide-react";

export default function Instructor() {
  return (
    <section className="border-t pt-12">
      <h2 className="text-2xl font-bold tracking-tight">
        Instructor
      </h2>

      <div className="mt-6 flex flex-col gap-6 sm:flex-row">
        {/* Avatar */}
        <div className="relative size-20 shrink-0 overflow-hidden rounded-full">
          <Image
            src="/instructors/john-smith.jpg"
            alt="John Smith"
            fill
            className="object-cover"
          />
        </div>

        {/* Information */}
        <div>
          <h3 className="text-xl font-semibold">
            John Smith
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Full-Stack Developer & Software Engineer
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <Star className="size-4 fill-primary text-primary" />
              <span className="font-medium">4.9 Instructor Rating</span>
            </span>

            <span className="text-muted-foreground">
              25,000+ students
            </span>

            <span className="text-muted-foreground">
              8 courses
            </span>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            John is a full-stack developer with over 8 years of
            experience building web applications. He enjoys
            teaching practical development skills and helping
            students build real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
}