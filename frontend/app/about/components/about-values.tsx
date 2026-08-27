import { BookOpen, BriefcaseBusiness, Code2 } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Practical Learning",
    description:
      "Learn concepts through practical lessons that focus on real-world skills and useful knowledge.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Expert Instructors",
    description:
      "Learn from experienced instructors who understand the skills and knowledge employers value.",
  },
  {
    icon: Code2,
    title: "Real Projects",
    description:
      "Put your knowledge into practice by building projects that demonstrate what you can actually do.",
  },
];

export default function AboutValues() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Learnify
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Built around how people actually learn.
          </h2>

          <p className="mt-4 text-muted-foreground">
            Everything on Learnify is designed to help you move from
            learning concepts to applying them.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-xl border bg-card p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}