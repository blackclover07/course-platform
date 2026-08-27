import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alex Johnson",
    rating: 5,
    comment:
      "Great course! The projects were practical and the explanations were easy to follow.",
  },
  {
    name: "Michael Brown",
    rating: 5,
    comment:
      "Really enjoyed the course. It helped me understand how frontend and backend work together.",
  },
  {
    name: "Emily Davis",
    rating: 4,
    comment:
      "Very useful course with good projects. I especially liked the backend section.",
  },
];

export default function CourseReviews() {
  return (
    <section className="border-t pt-12">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Student reviews
        </h2>

        <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-center">
          {/* Overall Rating */}
          <div className="flex shrink-0 flex-col items-center rounded-xl border px-8 py-6">
            <span className="text-4xl font-bold">
              4.8
            </span>

            <div className="mt-2 flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="size-4 fill-primary text-primary"
                />
              ))}
            </div>

            <span className="mt-2 text-sm text-muted-foreground">
              2,450 reviews
            </span>
          </div>

          {/* Rating Breakdown */}
          <div className="w-full max-w-md space-y-3">
            {[5, 4, 3, 2, 1].map((rating, index) => {
              const percentages = [78, 15, 5, 1, 1];

              return (
                <div
                  key={rating}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="w-12 shrink-0">
                    {rating} stars
                  </span>

                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{
                        width: `${percentages[index]}%`,
                      }}
                    />
                  </div>

                  <span className="w-10 text-right text-muted-foreground">
                    {percentages[index]}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10 space-y-6">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="border-b pb-6 last:border-b-0"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">
                {review.name}
              </h3>

              <div className="flex">
                {Array.from({ length: review.rating }).map(
                  (_, index) => (
                    <Star
                      key={index}
                      className="size-4 fill-primary text-primary"
                    />
                  ),
                )}
              </div>
            </div>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {review.comment}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}