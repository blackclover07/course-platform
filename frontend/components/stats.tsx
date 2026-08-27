const stats = [
  {
    value: "10K+",
    label: "Active Students",
  },
  {
    value: "500+",
    label: "Online Courses",
  },
  {
    value: "50+",
    label: "Expert Instructors",
  },
  {
    value: "95%",
    label: "Student Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="border-y">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-12 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center border-border px-6 py-4 text-center md:border-r last:border-r-0"
          >
            <span className="text-3xl font-bold tracking-tight">
              {stat.value}
            </span>

            <span className="mt-2 text-sm text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}