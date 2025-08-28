import CommunityActivitySection from "./_components/community-activity-section";
import Hero from "./_components/hero";
import HomeCta from "./_components/home-cta";
import PopularRessourcesSection from "./_components/popular-ressources-section/popular-ressources-section";
import TestimonialsSection from "./_components/testimonials-section";

export default async function Home() {
  return (
    <>
      <Hero />
      <PopularRessourcesSection />
      <CommunityActivitySection />
      <TestimonialsSection />
      <HomeCta />
    </>
  );
}
