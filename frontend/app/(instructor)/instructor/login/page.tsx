import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InstructorLoginPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border lg:grid-cols-2">
        {/* Image */}
        <div className="relative hidden min-h-[600px] lg:block">
          <Image
            src="/images/instructor-login.jpg"
            alt="Instructor teaching online"
            width={1920}
            height={1280}
            priority
            quality={100}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-end p-10">
            <div className="max-w-lg text-white">
              <h2 className="text-4xl font-bold tracking-tight">
                Share your knowledge.
              </h2>

              <p className="mt-4 text-white/80">
                Manage your courses, share your expertise, and help
                students learn new skills.
              </p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="flex min-h-[600px] items-center justify-center px-8 py-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Instructor Portal
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight">
                Welcome back
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                Sign in to manage your courses.
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email
                </Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">
                    Password
                  </Label>

                  <Link
                    href="/forgot-password"
                    className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
              >
                Instructor Login
              </Button>
            </form>

            {/* Back to Student Login */}
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Not an instructor?{" "}
              <Link
                href="/login"
                className="font-medium text-foreground hover:underline"
              >
                Student Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

