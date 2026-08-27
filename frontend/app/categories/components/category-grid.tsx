import CategoryCard from "./category-card";

const categories = [
  {
    name: "Development",
    slug: "development",
    description:
      "Web, mobile, backend and software development.",
  },
  {
    name: "Design",
    slug: "design",
    description:
      "UI, UX, graphic and product design.",
  },
  {
    name: "Business",
    slug: "business",
    description:
      "Business, management and entrepreneurship.",
  },
  {
    name: "Marketing",
    slug: "marketing",
    description:
      "Digital marketing, SEO and social media.",
  },
  {
    name: "Data & AI",
    slug: "data-ai",
    description:
      "Data science, machine learning and AI.",
  },
  {
    name: "Cybersecurity",
    slug: "cybersecurity",
    description:
      "Security, ethical hacking and networking.",
  },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
          />
        ))}
      </div>
    </section>
  );
}