import CourseHero from "./components/course-hero";
import CourseOverview from "./components/course-overview";
import EnrollmentCard from "./components/enrollment-card";
import CourseDescription from "./components/course-content";
import CourseCurriculum from "./components/course-curriculum";
import Instructor from "./components/instructor";
import CourseReviews from "./components/course-reviews";

export default function CourseDetailsPage() {
  return (
    <main>
      <CourseHero />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          <div className="space-y-12">
            <CourseOverview />
            <CourseDescription />
            <CourseCurriculum />
            <Instructor />
            <CourseReviews/>
          </div>
          <div>
            <EnrollmentCard />
          </div>
        </div>
      </section>
    </main>
  );
}
