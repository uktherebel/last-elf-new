import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import GameplayDeepDive from "@/components/GameplayDeepDive";
import StorySection from "@/components/StorySection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import TrailerSection from "@/components/TrailerSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-neutral-700 selection:text-white">
      <Hero />
      <FeaturesGrid />
      <GameplayDeepDive />
      <TrailerSection />
      <StorySection />
      <Gallery />
      <Footer />
    </main>
  );
}
