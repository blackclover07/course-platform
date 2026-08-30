import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border lg:grid-cols-2">
        {/* Image */}
        <div className="relative hidden min-h-[600px] lg:block">
          <Image
            src="/images/login.jpg"
            alt="Students learning online"
            width={1920}
            height={1280}
            priority
            quality={100}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 flex items-end p-10">
            <div className="max-w-lg text-white">
              <h2 className="text-4xl font-bold tracking-tight">
                Keep learning. Keep growing.
              </h2>

              <p className="mt-4 text-white/80">
                Continue your learning journey and build the skills
                that move you forward.
              </p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="flex min-h-[600px] items-center justify-center px-8 py-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome back
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                Sign in to continue learning.
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
                <Label htmlFor="password">
                  Password
                </Label>

                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-foreground hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
