import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Categories from "@/components/category";
import FeaturedCourses from "@/components/featured-courses";
import Features from "@/components/features";
import CTA from "@/components/cta";



export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Categories />
      <FeaturedCourses />
      <Features />
      <CTA />
   </main>
  );
}
