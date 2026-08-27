import CourseCard from "@/app/courses/components/course-card";

const courses = [
  {
    title: "Full-Stack Web Development",
    category: "Development",
    instructor: "John Smith",
    rating: 4.8,
    price: 49,
    image: "/courses/web-development.jpg",
  },
  {
    title: "Modern UI/UX Design",
    category: "Design",
    instructor: "Sarah Johnson",
    rating: 4.9,
    price: 39,
    image: "/courses/ui-ux.jpg",
  },
  {
    title: "Python & Machine Learning",
    category: "Data & AI",
    instructor: "Alex Brown",
    rating: 4.7,
    price: 59,
    image: "/courses/python-ml.jpg",
  },
  {
    title: "Django REST Framework",
    category: "Development",
    instructor: "David Wilson",
    rating: 4.8,
    price: 45,
    image: "/courses/django.jpg",
  },
  {
    title: "Digital Marketing Masterclass",
    category: "Marketing",
    instructor: "Emma Williams",
    rating: 4.6,
    price: 35,
    image: "/courses/marketing.jpg",
  },
  {
    title: "Cybersecurity Fundamentals",
    category: "Cybersecurity",
    instructor: "Robert Taylor",
    rating: 4.9,
    price: 55,
    image: "/courses/cybersecurity.jpg",
  },
  {
    title: "Advanced React Development",
    category: "Development",
    instructor: "James Anderson",
    rating: 4.8,
    price: 49,
    image: "/courses/react.jpg",
  },
  {
    title: "Product Design Fundamentals",
    category: "Design",
    instructor: "Sophia Martin",
    rating: 4.7,
    price: 42,
    image: "/courses/product-design.jpg",
  },
  {
    title: "Data Science with Python",
    category: "Data & AI",
    instructor: "Daniel Thomas",
    rating: 4.8,
    price: 52,
    image: "/courses/data-science.jpg",
  },
];

export default function CourseGrid() {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.title}
          course={course}
        />
      ))}
    </div>
  );
}