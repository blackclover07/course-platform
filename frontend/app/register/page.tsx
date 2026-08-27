import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Get started
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Create your Learnify account
          </h1>

          <p className="mt-3 text-sm text-muted-foreground">
            Start learning practical skills and building your future.
          </p>
        </div>

        <div className="mt-8 rounded-xl border bg-card p-6 shadow-sm">
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>

                <Input
                  id="first-name"
                  type="text"
                  placeholder="John"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>

                <Input
                  id="last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                type="password"
                placeholder="Create a password"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">
                Confirm password
              </Label>

              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
              />
            </div>

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>

          <div className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}