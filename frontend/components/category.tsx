import {
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Palette,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const categories = [
  {
    name: "Development",
    description: "Web, mobile, backend and software development.",
    icon: Code2,
  },
  {
    name: "Design",
    description: "UI, UX, graphic and product design.",
    icon: Palette,
  },
  {
    name: "Business",
    description: "Business, management and entrepreneurship.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Marketing",
    description: "Digital marketing, SEO and social media.",
    icon: Smartphone,
  },
  {
    name: "Data & AI",
    description: "Data science, machine learning and AI.",
    icon: BarChart3,
  },
  {
    name: "Cybersecurity",
    description: "Security, ethical hacking and networking.",
    icon: ShieldCheck,
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      {/* Section Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Explore Categories
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Find the skills you want to learn
          </h2>

          <p className="mt-4 text-muted-foreground">
            Explore courses across different fields and start
            building skills that matter.
          </p>
        </div>
      </div>

      {/* Category Cards */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.name}
              className="group rounded-xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                <Icon className="size-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {category.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {category.description}
              </p>

              <div className="mt-5 text-sm font-medium text-primary">
                Explore courses →
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}