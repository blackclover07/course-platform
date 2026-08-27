import Link from "next/link";

const platformLinks = [
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Categories",
    href: "/categories",
  },
  {
    label: "About",
    href: "/about",
  },
];

const accountLinks = [
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "Sign Up",
    href: "/register",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              Learn<span className="text-primary">ify</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Learn practical skills from expert instructors and
              build the knowledge you need for your future.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold">
              Platform
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {platformLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold">
              Account
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {accountLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © 2026 Learnify. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="transition-colors hover:text-primary"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-primary"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
