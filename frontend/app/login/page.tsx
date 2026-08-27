import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Welcome back
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Sign in to Learnify
          </h1>

          <p className="mt-3 text-sm text-muted-foreground">
            Continue learning and pick up where you left off.
          </p>
        </div>

        <div className="mt-8 rounded-xl border bg-card p-6 shadow-sm">
          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>

                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Input
                id="password"
                type="password"
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}