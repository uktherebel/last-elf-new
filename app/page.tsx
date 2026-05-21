import Hero from "@/components/Hero";
import Dock from "@/components/Dock";
import FeaturesGrid from "@/components/FeaturesGrid";
import GameplayDeepDive from "@/components/GameplayDeepDive";
import StorySection from "@/components/StorySection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import TrailerSection from "@/components/TrailerSection";
import { siteUrl } from "@/lib/seo";
import {
  appStoreDisplayName,
  appStoreUrl,
  googlePlayUrl,
  macAppStoreUrl,
  steamWishlistUrl,
} from "@/lib/store-links";
import SeoStoryContent from "@/components/SeoStoryContent";
import FaqSection, { faqs } from "@/components/FaqSection";
import QuickLinksSection from "@/components/QuickLinksSection";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "VideoGame",
      name: appStoreDisplayName,
      description:
        "Offline dark fantasy action RPG with story-driven adventure, sword combat, monster hunting, arena battles, and demon boss fights.",
      genre: ["Action RPG", "Dark Fantasy", "Hack and Slash"],
      playMode: "SinglePlayer",
      applicationCategory: "Game",
      operatingSystem: "iOS, iPadOS, macOS, Android",
      image: `${siteUrl}/RPG-Game-Capsules-22-January-2026/MainCapsule.jpg`,
      url: `${siteUrl}/`,
      sameAs: [appStoreUrl, googlePlayUrl, steamWishlistUrl],
      trailer: {
        "@type": "VideoObject",
        name: "The Last Elf Official Trailer",
        embedUrl: "https://www.youtube.com/embed/1z0FyfoEv-E",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: appStoreDisplayName,
      applicationCategory: "GameApplication",
      operatingSystem: "iOS, iPadOS, macOS, Android",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      installUrl: googlePlayUrl,
      downloadUrl: [appStoreUrl, macAppStoreUrl, googlePlayUrl],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black pb-24 text-white selection:bg-neutral-700 selection:text-white sm:pb-28">
      <h1 className="sr-only">
        The Last Elf: Dark Fantasy RPG
      </h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <Dock />
      <FeaturesGrid />
      <GameplayDeepDive />
      <TrailerSection />
      <StorySection />
      <Gallery />
      <SeoStoryContent />
      <FaqSection />
      <QuickLinksSection />
      <Footer />
    </main>
  );
}
