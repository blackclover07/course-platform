export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  slug: string;
}

export interface CourseDetail extends Course {
  sections: CourseSection[];
}

export interface CourseSection {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  order: number;
}
