import CoursesHeader from "./components/courses-header";
import CourseFilters from "./components/course-filters";
import CoursesToolbar from "./components/courses-toolbar";
import CourseGrid from "./components/course-grid";
import CoursesPagination from "./components/courses-pagination";

export default function CoursesPage() {
  return (
    <main>
      <CoursesHeader />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex gap-10">
          <CourseFilters />

          <div className="min-w-0 flex-1">
            <CoursesToolbar />

            <CourseGrid />

            <CoursesPagination/>
          </div>
        </div>
      </section>
    </main>
  );
}
