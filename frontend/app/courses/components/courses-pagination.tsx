import Link from "next/link";

export default function CoursesPagination() {
  return (
    <nav
      aria-label="Course pagination"
      className="mt-12 flex items-center justify-center gap-2"
    >
      <Link
        href="#"
        className="rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        Previous
      </Link>

      <Link
        href="#"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
      >
        1
      </Link>

      <Link
        href="#"
        className="rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        2
      </Link>

      <Link
        href="#"
        className="rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        3
      </Link>

      <span className="px-2 text-sm text-muted-foreground">
        ...
      </span>

      <Link
        href="#"
        className="rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        10
      </Link>

      <Link
        href="#"
        className="rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        Next
      </Link>
    </nav>
  );
}