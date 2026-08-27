import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const categories = [
  "Development",
  "Design",
  "Business",
  "Marketing",
  "Data & AI",
  "Cybersecurity",
];

const levels = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

const priceOptions = [
  "Free",
  "Paid",
];

export default function CourseFilters() {
  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <div className="sticky top-6">
        <h2 className="font-semibold">
          Filters
        </h2>

        {/* Categories */}
        <div className="mt-6 border-b pb-6">
          <h3 className="text-sm font-medium">
            Category
          </h3>

          <div className="mt-4 space-y-3">
            {categories.map((category) => (
              <div
                key={category}
                className="flex items-center gap-3"
              >
                <Checkbox id={category} />

                <Label
                  htmlFor={category}
                  className="cursor-pointer text-sm font-normal"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Level */}
        <div className="border-b py-6">
          <h3 className="text-sm font-medium">
            Level
          </h3>

          <div className="mt-4 space-y-3">
            {levels.map((level) => (
              <div
                key={level}
                className="flex items-center gap-3"
              >
                <Checkbox id={level} />

                <Label
                  htmlFor={level}
                  className="cursor-pointer text-sm font-normal"
                >
                  {level}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="py-6">
          <h3 className="text-sm font-medium">
            Price
          </h3>

          <div className="mt-4 space-y-3">
            {priceOptions.map((price) => (
              <div
                key={price}
                className="flex items-center gap-3"
              >
                <Checkbox id={price} />

                <Label
                  htmlFor={price}
                  className="cursor-pointer text-sm font-normal"
                >
                  {price}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}