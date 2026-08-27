import { CheckCircle2 } from "lucide-react";

const learningPoints = [
  "Build modern full-stack web applications",
  "Create REST APIs with Django",
  "Build responsive interfaces with React",
  "Work with databases and authentication",
  "Deploy applications to production",
  "Build real-world projects from scratch",
];

export default function CourseOverview() {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight">
        What you will learn
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {learningPoints.map((point) => (
          <div
            key={point}
            className="flex items-start gap-3"
          >
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />

            <p className="text-sm leading-6 text-muted-foreground">
              {point}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
