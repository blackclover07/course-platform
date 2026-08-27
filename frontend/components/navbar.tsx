import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
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

export default function Navbar() {
  return (
    <header className="border-b-2 border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          Learn<span className="text-primary">ify</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="/login">Login</Link>
          </Button>

          <Button>
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="size-6" />
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  Learn<span className="text-primary">ify</span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-6 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-2 flex flex-col gap-3 border-t pt-6">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link href="/login">Login</Link>
                  </Button>

                  <Button className="w-full">
                    <Link href="/register">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
