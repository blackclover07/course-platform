import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function CoursesHeader() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Learn
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Explore courses
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Discover practical courses taught by experienced
          instructors and build skills that matter.
        </p>

        <div className="mt-8 max-w-2xl">
          <InputGroup>
            <InputGroupAddon>
              <Search className="size-4" />
            </InputGroupAddon>

            <InputGroupInput
              placeholder="Search courses..."
              type="search"
            />
          </InputGroup>
        </div>
      </div>
    </section>
  );
}