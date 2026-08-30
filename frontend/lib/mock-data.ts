export const courses = [
  {
    id: 1,
    slug: "django-rest-framework",
    title: "Django REST Framework",
    description: "Build production-ready REST APIs with Django.",
    instructor: "Sagar Dey",
    category: "Web Development",
    price: 999,
    rating: 4.8,
  },
  {
    id: 2,
    slug: "react-fundamentals",
    title: "React Fundamentals",
    description: "Learn the fundamentals of React and build modern UIs.",
    instructor: "John Doe",
    category: " Frontend Development",
    price: 799,
    rating: 4.7,
  },
  {
    id: 3,
    slug: "docker-for-developers",
    title: "Docker for Developers",
    description: "Learn Docker and containerize your applications.",
    instructor: "Jane Smith",
    category: "DevOps",
    price: 599,
    rating: 4.9,
  },
];

export const categories = [
  {
    id: 1,
    name: "Web Development",
    slug: "web-development",
    description: "Build modern websites and web applications.",
    courseCount: 12,
  },
  {
    id: 2,
    name: "Python",
    slug: "python",
    description: "Learn Python from fundamentals to advanced concepts.",
    courseCount: 8,
  },
  {
    id: 3,
    name: "Java",
    slug: "java",
    description: "Master Java programming and backend development.",
    courseCount: 6,
  },
  {
    id: 4,
    name: "DevOps",
    slug: "devops",
    description: "Learn Docker, CI/CD, cloud and deployment.",
    courseCount: 5,
  },
];


export const courseDetails = {
  "django-rest-framework": {
    title: "Django REST Framework",
    description:
      "Build production-ready REST APIs with Django and Django REST Framework.",
    instructor: "Sagar Dey",
    category: "Web Development",
    price: 999,
    rating: 4.8,
    students: 1240,
    duration: "12 hours",
    level: "Intermediate",
    image: "/courses/django-rest.jpg",

    whatYouWillLearn: [
      "Build REST APIs with Django REST Framework",
      "Work with serializers and viewsets",
      "Implement JWT authentication",
      "Create custom permissions",
      "Work with PostgreSQL",
      "Deploy your Django API",
    ],

    requirements: [
      "Basic Python knowledge",
      "Basic understanding of Django",
      "A computer with Python installed",
    ],

    sections: [
      {
        title: "Introduction",
        lessons: [
          "Welcome to the Course",
          "Setting Up the Project",
        ],
      },
      {
        title: "Django REST Fundamentals",
        lessons: [
          "Models and Serializers",
          "API Views",
          "ViewSets and Routers",
        ],
      },
      {
        title: "Authentication",
        lessons: [
          "JWT Authentication",
          "Permissions",
          "Protecting API Endpoints",
        ],
      },
    ],
  },
};
