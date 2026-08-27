import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function CourseSearch() {
  return (
    <InputGroup className="max-w-xl">
      <InputGroupAddon>
        <Search className="size-4" />
      </InputGroupAddon>

      <InputGroupInput
        placeholder="Search courses..."
        type="search"
      />
    </InputGroup>
  );
}
