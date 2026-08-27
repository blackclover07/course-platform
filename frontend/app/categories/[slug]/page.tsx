import CategoryHeader from "./components/category-header";
import CourseGrid from "@/app/courses/components/course-grid";
import CoursesToolbar from "@/app/courses/components/courses-toolbar";
import CoursesPagination from "@/app/courses/components/courses-pagination";
import CTA from "@/components/cta";

export default function CategoryPage() {
  return (
    <main>
      <CategoryHeader
        name="Development"
        description="Learn frontend, backend, full-stack and software development skills through practical courses."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <CoursesToolbar />

        <CourseGrid />

        <CoursesPagination />
      </section>

      <CTA />
    </main>
  );
}