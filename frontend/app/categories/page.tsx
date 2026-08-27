import CategoriesHeader from "./components/categories-header";
import CategoryGrid from "./components/category-grid";
import CTA from "@/components/cta";

export default function CategoriesPage() {
  return (
    <main>
      <CategoriesHeader />
      <CategoryGrid />
      <CTA />
    </main>
  );
}