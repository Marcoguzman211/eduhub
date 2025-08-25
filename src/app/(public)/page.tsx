import CommunityActivitySection from "./_components/community-activity-section";
import Hero from "./_components/hero";
import PopularRessourcesSection from "./_components/popular-ressources-section/popular-ressources-section";

export default async function Home() {
  return (
    <>
      <Hero />
      <PopularRessourcesSection />
      <CommunityActivitySection />
    </>
  );
}
