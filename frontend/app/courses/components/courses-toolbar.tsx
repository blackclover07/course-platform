import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CoursesToolbar() {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        <span className="font-medium text-foreground">
          24
        </span>{" "}
        courses
      </p>

      <Select defaultValue="popular">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="popular">
            Most Popular
          </SelectItem>

          <SelectItem value="rating">
            Highest Rated
          </SelectItem>

          <SelectItem value="price-low">
            Price: Low to High
          </SelectItem>

          <SelectItem value="price-high">
            Price: High to Low
          </SelectItem>

          <SelectItem value="newest">
            Newest
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}