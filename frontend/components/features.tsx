import {
  Award,
  BookOpenCheck,
  Laptop,
  Users,
} from "lucide-react";

const features = [
  {
    icon: BookOpenCheck,
    title: "Practical Courses",
    description:
      "Learn through structured courses focused on practical skills and real-world projects.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn from experienced instructors who bring real-world knowledge to every course.",
  },
  {
    icon: Laptop,
    title: "Learn Anywhere",
    description:
      "Access your courses anytime and learn at your own pace from any device.",
  },
  {
    icon: Award,
    title: "Earn Certificates",
    description:
      "Complete courses and earn certificates that showcase your newly acquired skills.",
  },
];

export default function Features() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Learnify
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to keep learning
          </h2>

          <p className="mt-4 text-muted-foreground">
            A simple learning experience designed to help you
            build useful skills and keep making progress.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl border bg-card p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}