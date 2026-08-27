import AboutHero from "./components/about-hero";
import AboutMission from "./components/about-mission";
import AboutValues from "./components/about-values";
import CTA from "@/components/cta";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <CTA />
    </main>
  );
}