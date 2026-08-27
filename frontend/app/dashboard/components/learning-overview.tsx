import { BookOpen, CheckCircle2, Clock3 } from "lucide-react";

const stats = [
  {
    label: "Enrolled Courses",
    value: "12",
    icon: BookOpen,
  },
  {
    label: "Completed",
    value: "3",
    icon: CheckCircle2,
  },
  {
    label: "Learning Time",
    value: "8h 30m",
    icon: Clock3,
  },
];

export default function LearningOverview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-xl border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>

                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
              </div>

              <p className="mt-4 text-3xl font-bold tracking-tight">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}