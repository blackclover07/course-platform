import DashboardHeader from "./components/dashboard-header";
import LearningOverview from "./components/learning-overview";
import ContinueLearning from "./components/continue-learning";
import RecommendedCourses from "./components/recommended-courses";

export default function DashboardPage() {
  return (
    <main>
      <DashboardHeader />
      <LearningOverview />
      <ContinueLearning />
      <RecommendedCourses />
    </main>
  );
}