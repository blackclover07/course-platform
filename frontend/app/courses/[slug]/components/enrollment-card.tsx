import { Check, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Lifetime access",
  "Certificate of completion",
  "24 lessons",
  "Access on mobile and desktop",
];

export default function EnrollmentCard() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      {/* Preview */}
      <div className="flex items-center gap-3 border-b pb-5">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
          <PlayCircle className="size-5 text-primary" />
        </div>

        <div>
          <p className="text-sm font-medium">
            Course preview
          </p>

          <p className="text-xs text-muted-foreground">
            Start learning for free
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="mt-6">
        <span className="text-3xl font-bold">
          $49
        </span>
      </div>

      {/* CTA */}
      <Button size="lg" className="mt-5 w-full">
        Enroll Now
      </Button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        30-day money-back guarantee
      </p>

      {/* Benefits */}
      <div className="mt-6 border-t pt-6">
        <h3 className="text-sm font-semibold">
          This course includes:
        </h3>

        <div className="mt-4 flex flex-col gap-3">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3"
            >
              <Check className="size-4 shrink-0 text-primary" />

              <span className="text-sm text-muted-foreground">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}