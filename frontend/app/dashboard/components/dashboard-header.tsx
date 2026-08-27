export default function DashboardHeader() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Dashboard
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Welcome back, John 👋
        </h1>

        <p className="mt-3 text-muted-foreground">
          Continue learning and keep making progress.
        </p>
      </div>
    </section>
  );
}