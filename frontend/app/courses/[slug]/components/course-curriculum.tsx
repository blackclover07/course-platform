import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, PlayCircle } from "lucide-react";

const curriculum = [
  {
    id: "section-1",
    title: "Introduction to Web Development",
    lessons: [
      {
        title: "Welcome to the course",
        duration: "05:32",
      },
      {
        title: "How the web works",
        duration: "12:45",
      },
      {
        title: "Setting up your development environment",
        duration: "08:20",
      },
    ],
  },
  {
    id: "section-2",
    title: "Frontend Development",
    lessons: [
      {
        title: "HTML fundamentals",
        duration: "18:20",
      },
      {
        title: "CSS fundamentals",
        duration: "22:15",
      },
      {
        title: "Introduction to React",
        duration: "16:40",
      },
    ],
  },
  {
    id: "section-3",
    title: "Backend Development",
    lessons: [
      {
        title: "Introduction to APIs",
        duration: "14:10",
      },
      {
        title: "Building REST APIs",
        duration: "24:35",
      },
      {
        title: "Authentication",
        duration: "19:50",
      },
    ],
  },
  {
    id: "section-4",
    title: "Databases & Deployment",
    lessons: [
      {
        title: "Working with databases",
        duration: "21:30",
      },
      {
        title: "Connecting frontend and backend",
        duration: "17:45",
      },
      {
        title: "Deploying the application",
        duration: "15:20",
      },
    ],
  },
];

export default function CourseCurriculum() {
  return (
    <section>
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Course content
        </h2>

        <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
          <span>4 sections</span>
          <span>•</span>
          <span>12 lessons</span>
          <span>•</span>
          <span>3h 14m total</span>
        </div>
      </div>

      <Accordion className="mt-6 w-full rounded-xl border">
        {curriculum.map((section, index) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            className="px-5"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-sm font-semibold text-primary">
                  {index + 1}
                </span>

                <span className="font-semibold">
                  {section.title}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="space-y-1 pb-3">
                {section.lessons.map((lesson) => (
                  <div
                    key={lesson.title}
                    className="flex items-center justify-between rounded-md px-3 py-3 transition-colors hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <PlayCircle className="size-4 text-primary" />

                      <span className="text-sm">
                        {lesson.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3.5" />
                      {lesson.duration}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
