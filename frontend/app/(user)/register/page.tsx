import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border lg:grid-cols-2">
        {/* Image */}
        <div className="relative hidden min-h-[650px] lg:block">
          <Image
            src="/images/register.jpg"
            alt="Student learning online"
            fill
            priority
            sizes="(min-width: 1024px) 512px, 0px"
            quality={100}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-end p-10">
            <div className="max-w-lg text-white">
              <h2 className="text-4xl font-bold tracking-tight">
                Start your learning journey.
              </h2>

              <p className="mt-4 text-white/80">
                Create an account and discover courses designed to
                help you learn, build, and grow.
              </p>
            </div>
          </div>
        </div>

        {/* Register Form */}
        <div className="flex min-h-[650px] items-center justify-center px-8 py-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Create an account
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                Join CourseHub and start learning today.
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-5">
              {/* Name */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">
                    First name
                  </Label>

                  <Input
                    id="first-name"
                    type="text"
                    placeholder="John"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="last-name">
                    Last name
                  </Label>

                  <Input
                    id="last-name"
                    type="text"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              {/* Email */}
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

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">
                  Password
                </Label>

                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirm-password">
                  Confirm password
                </Label>

                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
              >
                Create Account
              </Button>
            </form>

            {/* Login */}
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-foreground hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
