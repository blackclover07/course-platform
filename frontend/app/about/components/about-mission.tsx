export default function AboutMission() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our mission
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Education should help you build, not just watch.
          </h2>
        </div>

        <div className="space-y-5 text-muted-foreground leading-7">
          <p>
            Learnify was built around a simple idea: learning
            becomes more valuable when you can apply what you learn.
          </p>

          <p>
            Our courses focus on practical concepts, real-world
            projects, and skills that help learners move from
            understanding an idea to actually building something.
          </p>
        </div>
      </div>
    </section>
  );
}