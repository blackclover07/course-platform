type CategoryHeaderProps = {
  name: string;
  description: string;
};

export default function CategoryHeader({
  name,
  description,
}: CategoryHeaderProps) {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Category
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {name}
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}