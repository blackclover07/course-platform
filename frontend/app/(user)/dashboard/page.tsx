import Link from "next/link";
import { cookies } from "next/headers";

import getProfile from "@/lib/api/get-profile";
import ProfileModal from "@/components/profile/profile-modal";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  const student = await getProfile(accessToken!);

  return (
    <main className="min-h-[calc(100vh-4rem)] px-6 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              Student Dashboard
            </p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight">
              Welcome back 👋 {student.first_name} {student.last_name}
            </h1>

            <p className="mt-2 text-muted-foreground">
              Continue learning and keep building your skills.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/courses"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Browse Courses
            </Link>

            <ProfileModal student={student} />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-5">
            <p className="text-sm text-muted-foreground">
              Enrolled Courses
            </p>

            <p className="mt-2 text-3xl font-bold">
              0
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <p className="text-sm text-muted-foreground">
              Courses Completed
            </p>

            <p className="mt-2 text-3xl font-bold">
              0
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <p className="text-sm text-muted-foreground">
              Learning Hours
            </p>

            <p className="mt-2 text-3xl font-bold">
              0
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <p className="text-sm text-muted-foreground">
              Certificates
            </p>

            <p className="mt-2 text-3xl font-bold">
              0
            </p>
          </div>
        </div>

        {/* Continue Learning */}
        <section className="mt-10">
          <div>
            <h2 className="text-xl font-semibold">
              Continue Learning
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Pick up where you left off.
            </p>
          </div>

          <div className="mt-5 rounded-xl border p-8 text-center">
            <h3 className="text-lg font-semibold">
              No courses yet
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Explore our courses and start your learning journey.
            </p>

            <Link
              href="/courses"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Courses
            </Link>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">
            Quick Actions
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/courses"
              className="rounded-xl border p-6 transition-colors hover:bg-muted"
            >
              <h3 className="font-semibold">
                Browse Courses
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Find a course and start learning.
              </p>
            </Link>

            <Link
              href="/profile"
              className="rounded-xl border p-6 transition-colors hover:bg-muted"
            >
              <h3 className="font-semibold">
                My Profile
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                View and manage your profile.
              </p>
            </Link>

            <Link
              href="/certificates"
              className="rounded-xl border p-6 transition-colors hover:bg-muted"
            >
              <h3 className="font-semibold">
                My Certificates
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                View your earned certificates.
              </p>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
