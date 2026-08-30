import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateCoursePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] px-6 py-10">
      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Instructor Portal
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Create a course
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Add the basic information about your course.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-8">
          {/* Basic Information */}
          <section className="rounded-xl border p-6">
            <div>
              <h2 className="text-lg font-semibold">
                Basic information
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Tell students what your course is about.
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {/* Course Title */}
              <div className="space-y-2">
                <Label htmlFor="title">
                  Course title
                </Label>

                <Input
                  id="title"
                  type="text"
                  placeholder="e.g. Complete Python Course"
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">
                  Description
                </Label>

                <Textarea
                  id="description"
                  placeholder="Describe what students will learn in this course..."
                  className="min-h-32 resize-none"
                  required
                />
              </div>

              {/* Category + Level */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="category">
                    Category
                  </Label>

                  <select
                    id="category"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    required
                  >
                    <option value="">
                      Select a category
                    </option>

                    <option value="programming">
                      Programming
                    </option>

                    <option value="web-development">
                      Web Development
                    </option>

                    <option value="data-science">
                      Data Science
                    </option>

                    <option value="design">
                      Design
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="level">
                    Course level
                  </Label>

                  <select
                    id="level"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    required
                  >
                    <option value="">
                      Select a level
                    </option>

                    <option value="beginner">
                      Beginner
                    </option>

                    <option value="intermediate">
                      Intermediate
                    </option>

                    <option value="advanced">
                      Advanced
                    </option>
                  </select>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <Label htmlFor="price">
                  Price
                </Label>

                <Input
                  id="price"
                  type="number"
                  min="0"
                  placeholder="e.g. 999"
                  required
                />
              </div>
            </div>
          </section>

          {/* Thumbnail */}
          <section className="rounded-xl border p-6">
            <div>
              <h2 className="text-lg font-semibold">
                Course thumbnail
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Add an image that represents your course.
              </p>
            </div>

            <div className="mt-6">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                <Image
                  src="/images/course-placeholder.jpg"
                  alt="Course thumbnail preview"
                  fill
                  sizes="(min-width: 1024px) 768px, 100vw"
                  className="object-cover"
                />
              </div>

              <Input
                id="thumbnail"
                type="file"
                accept="image/*"
                className="mt-4"
              />
            </div>
          </section>

          {/* What Students Will Learn */}
          <section className="rounded-xl border p-6">
            <div>
              <h2 className="text-lg font-semibold">
                What will students learn?
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Add the main outcomes students can expect from
                completing your course.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <Input
                type="text"
                placeholder="e.g. Build real-world Python applications"
              />

              <Input
                type="text"
                placeholder="e.g. Understand Python fundamentals"
              />

              <Input
                type="text"
                placeholder="e.g. Work with databases and APIs"
              />
            </div>
          </section>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="outline"
            >
              Cancel
            </Button>

            <Button type="submit">
              Create Course
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
