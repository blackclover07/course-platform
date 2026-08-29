from django.core.management.base import BaseCommand
from django.utils.text import slugify

from courses.models import Category, Course, Section, Lesson


CATEGORIES = [
    {
        "name": "Development",
        "description": "Learn modern web and software development.",
    },
    {
        "name": "Data & AI",
        "description": "Learn Python, data science, machine learning, and AI.",
    },
    {
        "name": "Design",
        "description": "Learn UI/UX design and modern product design.",
    },
    {
        "name": "Business",
        "description": "Develop practical business and entrepreneurship skills.",
    },
    {
        "name": "Marketing",
        "description": "Learn digital marketing, SEO, and content strategy.",
    },
    {
        "name": "Cybersecurity",
        "description": "Learn security fundamentals and secure application development.",
    },
]


COURSES = [
    {
        "title": "Full-Stack Web Development",
        "description": "Learn how to build complete web applications from frontend to backend.",
        "price": 49.00,
        "category": "Development",
    },
    {
        "title": "React Fundamentals",
        "description": "Learn the fundamentals of React and build modern interactive interfaces.",
        "price": 39.00,
        "category": "Development",
    },
    {
        "title": "Next.js from Zero to Production",
        "description": "Build production-ready applications using Next.js and modern React.",
        "price": 59.00,
        "category": "Development",
    },
    {
        "title": "Django REST API Development",
        "description": "Build scalable REST APIs using Django and Django REST Framework.",
        "price": 49.00,
        "category": "Development",
    },
    {
        "title": "Python for Data Science",
        "description": "Learn Python programming for data analysis and data science.",
        "price": 44.00,
        "category": "Data & AI",
    },
    {
        "title": "Machine Learning with Python",
        "description": "Learn machine learning concepts and build practical ML models with Python.",
        "price": 69.00,
        "category": "Data & AI",
    },
    {
        "title": "Generative AI Fundamentals",
        "description": "Understand modern generative AI concepts and build AI-powered applications.",
        "price": 59.00,
        "category": "Data & AI",
    },
    {
        "title": "Modern UI/UX Design",
        "description": "Learn modern UI/UX principles and design better digital products.",
        "price": 39.00,
        "category": "Design",
    },
    {
        "title": "Figma for Beginners",
        "description": "Learn Figma from the ground up and create professional interface designs.",
        "price": 29.00,
        "category": "Design",
    },
    {
        "title": "Digital Marketing Fundamentals",
        "description": "Learn the foundations of digital marketing and online growth.",
        "price": 35.00,
        "category": "Marketing",
    },
    {
        "title": "Entrepreneurship Essentials",
        "description": "Learn the fundamentals of building and growing a successful business.",
        "price": 45.00,
        "category": "Business",
    },
    {
        "title": "Cybersecurity Fundamentals",
        "description": "Learn the fundamentals of cybersecurity, threats, and secure systems.",
        "price": 55.00,
        "category": "Cybersecurity",
    },
]


COURSE_SECTIONS = [
    {
        "title": "Introduction",
        "description": "Understand the fundamentals and get started with the course.",
        "lessons": [
            "Welcome to the Course",
            "Understanding the Fundamentals",
            "Setting Up Your Environment",
            "Your First Project",
        ],
    },
    {
        "title": "Core Concepts",
        "description": "Learn the most important concepts and techniques.",
        "lessons": [
            "Understanding the Core Concepts",
            "Working with the Main Features",
            "Common Patterns and Best Practices",
            "Building a Practical Example",
        ],
    },
    {
        "title": "Real-World Project",
        "description": "Apply what you learned by building a practical project.",
        "lessons": [
            "Planning the Project",
            "Building the Main Features",
            "Testing and Improving the Project",
            "Final Project Review",
        ],
    },
]


class Command(BaseCommand):
    help = "Seed the database with development data."

    def add_arguments(self, parser):
        parser.add_argument(
            "--clear",
            action="store_true",
            help="Delete existing courses, sections, lessons, and categories.",
        )

    def handle(self, *args, **options):
        if options["clear"]:
            self.stdout.write("Clearing existing data...")

            Lesson.objects.all().delete()
            Section.objects.all().delete()
            Course.objects.all().delete()
            Category.objects.all().delete()

        # Categories
        self.stdout.write("Creating categories...")

        categories = {}

        for category_data in CATEGORIES:
            category = Category.objects.create(
                name=category_data["name"],
                slug=slugify(category_data["name"]),
                description=category_data["description"],
            )

            categories[category.name] = category

        self.stdout.write(
            self.style.SUCCESS(
                f"Created {len(categories)} categories."
            )
        )

        # Courses
        self.stdout.write("Creating courses...")

        courses_created = 0
        sections_created = 0
        lessons_created = 0

        for course_data in COURSES:
            category = categories[course_data["category"]]

            course = Course.objects.create(
                category=category,
                title=course_data["title"],
                description=course_data["description"],
                price=course_data["price"],
            )

            courses_created += 1

            # Sections
            for section_order, section_data in enumerate(
                COURSE_SECTIONS,
                start=1,
            ):
                section = Section.objects.create(
                    course=course,
                    title=section_data["title"],
                    description=section_data["description"],
                    order=section_order,
                )

                sections_created += 1

                # Lessons
                for lesson_order, lesson_title in enumerate(
                    section_data["lessons"],
                    start=1,
                ):
                    Lesson.objects.create(
                        section=section,
                        title=lesson_title,
                        description=f"Learn about {lesson_title.lower()}.",
                        content=(
                            f"This lesson covers {lesson_title.lower()} "
                            f"and provides practical knowledge that you "
                            f"can apply throughout the course."
                        ),
                        order=lesson_order,
                    )

                    lessons_created += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"Created {courses_created} courses."
            )
        )

        self.stdout.write(
            self.style.SUCCESS(
                f"Created {sections_created} sections."
            )
        )

        self.stdout.write(
            self.style.SUCCESS(
                f"Created {lessons_created} lessons."
            )
        )

        self.stdout.write(
            self.style.SUCCESS(
                "Database seeding completed successfully!"
            )
        )