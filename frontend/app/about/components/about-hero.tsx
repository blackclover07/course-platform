export default function AboutHero() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          About Learnify
        </p>

        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Learn practical skills.
          <br />
          <span className="text-primary">Build your future.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Learnify is an online learning platform focused on
          practical, project-based education that helps learners
          develop skills they can actually use.
        </p>
      </div>
    </section>
  );
}