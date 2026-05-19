import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Clapperboard,
  Download,
  ExternalLink,
  Eye,
  ImageIcon,
  KeyRound,
  Mail,
  Map,
  Monitor,
  Play,
  RadioTower,
  ScrollText,
  ShieldX,
  Skull,
  Sword,
  Timer,
  Trophy,
} from "lucide-react";
import Footer from "@/components/Footer";
import PressMediaCarousel, {
  type PressMediaItem,
} from "@/components/PressMediaCarousel";
import { Button } from "@/components/ui/button";
import { appStoreUrl, googlePlayUrl, steamWishlistUrl } from "@/lib/store-links";

export const metadata: Metadata = {
  title: "Press Kit",
  description:
    "Press kit for The Last Elf, an offline third-person dark fantasy action RPG for Steam, macOS, iOS, and Android.",
  alternates: {
    canonical: "/press",
  },
  openGraph: {
    title: "The Last Elf Press Kit",
    description:
      "Official screenshots, trailer links, key art, fact sheet, and creator angles for The Last Elf.",
    url: "/press",
    images: [
      {
        url: "/RPG-Game-Capsules-22-January-2026/HeaderCapsule.jpg",
        width: 1200,
        height: 630,
        alt: "The Last Elf store capsule art",
      },
    ],
  },
};

const trailerUrl = "https://www.youtube.com/watch?v=1z0FyfoEv-E";
const trailerEmbedUrl = "https://www.youtube.com/embed/1z0FyfoEv-E?si=rz2HHDMjTP5C1fnL";
const pressEmail = "lastelfconteza@outlook.com";

// TODO: Replace these placeholder press downloads when final packaged assets are published.
const pressKitZip = "/press-assets/TheLastElf_PressKit.zip";
const screenshotsZip = "/press-assets/TheLastElf_Screenshots.zip";
const trailerMp4 =
  "https://drive.google.com/drive/folders/13DcR9EbLiV0JnGfeoMUwZjVxB1UM9qD_?usp=share_link";
const brollZip = "/press-assets/TheLastElf_BRoll.zip";

const primaryScreenshots = [
  {
    caption: "Ruined Castle",
    src: "/crousel-imgs/1.webp",
    alt: "The Last Elf ruined castle environment screenshot",
  },
  {
    caption: "Cursed Approach",
    src: "/crousel-imgs/2.webp",
    alt: "The Last Elf cursed world approach screenshot",
  },
  {
    caption: "Monster Encounter",
    src: "/crousel-imgs/3.webp",
    alt: "The Last Elf monster encounter screenshot",
  },
  {
    caption: "Dungeon Passage",
    src: "/crousel-imgs/5.webp",
    alt: "The Last Elf dungeon passage screenshot",
  },
  {
    caption: "Dungeon Fight",
    src: "/crousel-imgs/6.webp",
    alt: "The Last Elf dungeon fight screenshot",
  },
  {
    caption: "Forgotten Lands",
    src: "/crousel-imgs/8.webp",
    alt: "The Last Elf forgotten lands exploration screenshot",
  },
  {
    caption: "Forest Ruins",
    src: "/crousel-imgs/9.webp",
    alt: "The Last Elf forest ruins screenshot",
  },
  {
    caption: "Demon Boss",
    src: "/crousel-imgs/10.webp",
    alt: "The Last Elf demon boss battle screenshot",
  },
  {
    caption: "Arena Trial",
    src: "/crousel-imgs/11.webp",
    alt: "The Last Elf arena battle screenshot",
  },
  {
    caption: "Exploration",
    src: "/crousel-imgs/12.webp",
    alt: "The Last Elf dark fantasy exploration screenshot",
  },
  {
    caption: "Sword Combat",
    src: "/crousel-imgs/sword-combat.webp",
    alt: "The Last Elf sword combat gameplay screenshot",
  },
];

const refinedScreenshots = [
  {
    caption: "Castle Approach",
    src: "/Screenshots - Refined/dark-fantasy-castle-approach.png",
    alt: "The Last Elf dark fantasy castle approach refined screenshot",
  },
  {
    caption: "Combat Stance",
    src: "/Screenshots - Refined/elf-warrior-combat-stance.png",
    alt: "The Last Elf warrior combat stance refined screenshot",
  },
  {
    caption: "Night Battle",
    src: "/Screenshots - Refined/monster-horde-night-battle.png",
    alt: "The Last Elf monster horde night battle refined screenshot",
  },
  {
    caption: "Dungeon Clash",
    src: "/Screenshots - Refined/dungeon-hack-and-slash-scene.png",
    alt: "The Last Elf dungeon hack and slash refined screenshot",
  },
  {
    caption: "Cursed Lands",
    src: "/Screenshots - Refined/cursed-lands-demon-encounter.png",
    alt: "The Last Elf cursed lands demon encounter refined screenshot",
  },
  {
    caption: "Ruined World",
    src: "/Screenshots - Refined/ruined-world-exploration-elf.png",
    alt: "The Last Elf ruined world exploration refined screenshot",
  },
  {
    caption: "Real-time Battle",
    src: "/Screenshots - Refined/sword-combat-real-time-battle.png",
    alt: "The Last Elf real-time sword battle refined screenshot",
  },
  {
    caption: "Boss Arena",
    src: "/Screenshots - Refined/demon-boss-arena-fight.png",
    alt: "The Last Elf demon boss arena refined screenshot",
  },
];

const allScreenshots = [...primaryScreenshots, ...refinedScreenshots];

const carouselItems: PressMediaItem[] = [
  {
    type: "video",
    title: "Official Gameplay Trailer",
    src: trailerUrl,
    thumbnail: "/press/art/RPG-Game-Youtube-Thumbnail-2.jpg",
    alt: "The Last Elf official gameplay trailer thumbnail",
    embedUrl: trailerEmbedUrl,
    watchUrl: trailerUrl,
  },
  ...primaryScreenshots.map((screenshot) => ({
    type: "image" as const,
    title: screenshot.caption,
    src: screenshot.src,
    thumbnail: screenshot.src,
    alt: screenshot.alt,
  })),
];

const factSheet = [
  ["Title", "The Last Elf"],
  ["Genre", "Third-Person Dark Fantasy Action RPG"],
  ["Platforms", "Steam, macOS, iOS, Android"],
  ["Mode", "Single-player"],
  ["Online Requirement", "Offline playable"],
  ["Developer / Publisher", "Content Arcade / Conteza Games"],
  ["Release Status", "Available / Coming Soon (platform-dependent placeholder)"],
  ["Website", "https://thelastelf.netlify.app"],
  ["Trailer", trailerUrl],
  ["Contact", pressEmail],
];

const steamStyleFacts = [
  ["Developer", "Content Arcade / Conteza Games"],
  ["Publisher", "Content Arcade / Conteza Games"],
  ["Mode", "Single-player"],
  ["Online", "Offline playable"],
  ["Platforms", "Steam, macOS, iOS, Android"],
  ["Release", "Available / Coming Soon"],
];

const tags = [
  "Action RPG",
  "Dark Fantasy",
  "Third Person",
  "Single-player",
  "Offline",
  "Hack and Slash",
  "Boss Fights",
  "Exploration",
];

const features = [
  {
    icon: RadioTower,
    text: "Offline single-player dark fantasy RPG",
  },
  {
    icon: Eye,
    text: "Third-person real-time melee combat",
  },
  {
    icon: Sword,
    text: "Dodge, strike, execute combat flow",
  },
  {
    icon: Timer,
    text: "Stamina, timing, and positioning-based fights",
  },
  {
    icon: Skull,
    text: "Monster hunts and demon boss encounters",
  },
  {
    icon: Map,
    text: "Ruined castles, twisted forests, cursed lands, and dungeon-style areas",
  },
  {
    icon: Trophy,
    text: "Arena battles and survival trials",
  },
  {
    icon: Activity,
    text: "Gear progression and weapon discovery",
  },
  {
    icon: ShieldX,
    text: "No PvP, no gacha, no always-online requirement",
  },
];

const pressAssets = [
  {
    title: "Logo PNG",
    src: "/RPGGame-Logo-Icon-MainMenu/logo-new.png",
    href: "/RPGGame-Logo-Icon-MainMenu/logo-new.png",
    alt: "The Last Elf logo PNG",
  },
  {
    title: "Logo transparent",
    src: "/RPGGame-Logo-Icon-MainMenu/logo-ios.png",
    href: "/RPGGame-Logo-Icon-MainMenu/logo-ios.png",
    alt: "The Last Elf transparent app logo",
  },
  {
    title: "Press logo 512",
    src: "/press/logos/512.png",
    href: "/press/logos/512.png",
    alt: "The Last Elf 512 pixel press logo",
  },
  {
    title: "Press logo 512 new",
    src: "/press/logos/512-new.png",
    href: "/press/logos/512-new.png",
    alt: "The Last Elf new 512 pixel press logo",
  },
  {
    title: "iOS logo",
    src: "/press/logos/logo-ios.png",
    href: "/press/logos/logo-ios.png",
    alt: "The Last Elf iOS logo",
  },
  {
    title: "RPG logo",
    src: "/RPGGame-Logo-Icon-MainMenu/RPG-Logo.png",
    href: "/RPGGame-Logo-Icon-MainMenu/RPG-Logo.png",
    alt: "The Last Elf RPG logo asset",
  },
  {
    title: "Game icon",
    src: "/RPGGame-Logo-Icon-MainMenu/RPGGame-Icon.png",
    href: "/RPGGame-Logo-Icon-MainMenu/RPGGame-Icon.png",
    alt: "The Last Elf game icon",
  },
  {
    title: "Alternate icon",
    src: "/RPGGame-Logo-Icon-MainMenu/RPGGame-Icon1.png",
    href: "/RPGGame-Logo-Icon-MainMenu/RPGGame-Icon1.png",
    alt: "The Last Elf alternate game icon",
  },
  {
    title: "Last Elf logo",
    src: "/RPGGame-Logo-Icon-MainMenu/last-elf-logo.png",
    href: "/RPGGame-Logo-Icon-MainMenu/last-elf-logo.png",
    alt: "The Last Elf wordmark logo",
  },
  {
    title: "Key art no text",
    src: "/press/art/RPG-Game-Youtube-Thumbnail-2.jpg",
    href: "/press/art/RPG-Game-Youtube-Thumbnail-2.jpg",
    alt: "The Last Elf key art without store framing",
  },
  {
    title: "Key art with logo",
    src: "/press/art/Main-Capsule1.jpg",
    href: "/press/art/Main-Capsule1.jpg",
    alt: "The Last Elf key art with logo",
  },
  {
    title: "Main capsule",
    src: "/RPG-Game-Capsules-22-January-2026/MainCapsule.jpg",
    href: "/RPG-Game-Capsules-22-January-2026/MainCapsule.jpg",
    alt: "The Last Elf main capsule art",
  },
  {
    title: "Main capsule alt",
    src: "/RPG-Game-Capsules-22-January-2026/MainCapsule1.jpg",
    href: "/RPG-Game-Capsules-22-January-2026/MainCapsule1.jpg",
    alt: "The Last Elf alternate main capsule art",
  },
  {
    title: "Header capsule",
    src: "/RPG-Game-Capsules-22-January-2026/HeaderCapsule.jpg",
    href: "/RPG-Game-Capsules-22-January-2026/HeaderCapsule.jpg",
    alt: "The Last Elf Steam header capsule art",
  },
  {
    title: "Small capsule",
    src: "/RPG-Game-Capsules-22-January-2026/SmallCapsule.jpg",
    href: "/RPG-Game-Capsules-22-January-2026/SmallCapsule.jpg",
    alt: "The Last Elf small store capsule art",
  },
  {
    title: "Vertical capsule",
    src: "/RPG-Game-Capsules-22-January-2026/VerticalCapsule.jpg",
    href: "/RPG-Game-Capsules-22-January-2026/VerticalCapsule.jpg",
    alt: "The Last Elf vertical store capsule art",
  },
  {
    title: "Press main capsule",
    src: "/press/art/Main-Capsule2.jpg",
    href: "/press/art/Main-Capsule2.jpg",
    alt: "The Last Elf press main capsule art",
  },
  {
    title: "Store art pack",
    src: "/press/art/Main-Capsule-2.jpg",
    href: "/press/art/Main-Capsule-2.jpg",
    alt: "The Last Elf store art pack preview",
  },
];

const creatorAngles = [
  {
    title: "First Look",
    text: "Compact dark fantasy RPG with a focused story-first structure.",
  },
  {
    title: "Boss Fight Segment",
    text: "Demon and monster encounters built for tense gameplay coverage.",
  },
  {
    title: "Offline RPG Angle",
    text: "No PvP, no gacha, no always-online requirement.",
  },
  {
    title: "Combat Impressions",
    text: "Dodge, strike, execute, and stamina-based fighting.",
  },
  {
    title: "Indie RPG Discovery",
    text: "Dark fantasy game for players looking for smaller RPGs.",
  },
];

const storeLinks = [
  {
    label: "Steam",
    href: steamWishlistUrl,
    note: "Wishlist on Steam",
    iconSrc: "/store-logos/steam-svgrepo-com.svg",
    iconAlt: "Steam",
  },
  {
    label: "App Store",
    href: appStoreUrl,
    note: "Download on iOS",
    iconSrc: "/store-icons/Apple.svg",
    iconAlt: "Apple App Store",
    invertIcon: true,
  },
  {
    label: "Google Play",
    href: googlePlayUrl,
    note: "Download on Android",
    iconSrc: "/store-icons/Playstore.svg",
    iconAlt: "Google Play",
  },
  {
    label: "macOS",
    href: appStoreUrl,
    note: "Available through Apple platforms",
    iconSrc: "/store-icons/Apple.svg",
    iconAlt: "Apple",
    invertIcon: true,
  },
];

function PressButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  return (
    <Button
      asChild
      className={
        variant === "primary"
          ? "h-auto rounded-md bg-primary px-5 py-3 font-heading text-sm uppercase tracking-[0.16em] text-black hover:bg-amber-300"
          : "h-auto rounded-md border border-white/15 bg-white/5 px-5 py-3 font-heading text-sm uppercase tracking-[0.16em] text-neutral-100 hover:border-white/40 hover:bg-white/10"
      }
    >
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </Button>
  );
}

function SectionTitle({
  icon,
  title,
  eyebrow,
}: {
  icon?: ReactNode;
  title: string;
  eyebrow?: string;
}) {
  return (
    <div className="mb-6 border-b border-white/10 pb-4">
      {eyebrow ? (
        <p className="mb-2 text-xs uppercase tracking-[0.32em] text-primary/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="flex items-center gap-3 text-2xl font-heading font-bold text-white md:text-3xl">
        {icon}
        {title}
      </h2>
    </div>
  );
}

function DarkPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section
      className={`rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018)_35%,rgba(0,0,0,0.35))] shadow-[0_22px_70px_-45px_rgba(212,160,23,0.45)] ${className}`}
    >
      {children}
    </section>
  );
}

export default function PressPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-neutral-700 selection:text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-neutral-950">
        <div className="absolute inset-0">
          <Image
            src="/press/art/Main-Capsule2.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.14),transparent_42%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black" />
        </div>

        <div className="container relative mx-auto max-w-7xl px-4 py-8 md:py-12">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.22em] text-neutral-500">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-primary">
                The Last Elf
              </Link>
              <span>/</span>
              <span className="text-neutral-300">Press Kit</span>
            </div>
            <a
              href={steamWishlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-amber-300"
            >
              Steam Store
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <h1 className="mb-5 text-4xl font-heading font-bold text-white md:text-6xl">
            The Last Elf
          </h1>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(330px,0.85fr)]">
            <PressMediaCarousel items={carouselItems} />

            <DarkPanel className="overflow-hidden">
              <Image
                src="/RPG-Game-Capsules-22-January-2026/HeaderCapsule.jpg"
                alt="The Last Elf header capsule art"
                width={920}
                height={430}
                priority
                className="w-full border-b border-white/10 object-cover"
              />
              <div className="space-y-5 p-5">
                <p className="text-sm leading-relaxed text-neutral-300">
                  The Last Elf is a third-person dark fantasy action RPG about
                  one surviving hero fighting through a ruined world of demons,
                  monsters, forgotten castles, and cursed lands.
                </p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-amber-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <dl className="grid gap-2 text-sm">
                  {steamStyleFacts.map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[7.5rem_1fr] gap-3 border-t border-white/10 pt-2"
                    >
                      <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                        {label}
                      </dt>
                      <dd className="text-neutral-200">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </DarkPanel>
          </div>

          <DarkPanel className="mt-5 p-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-primary/80">
                  Press Kit
                </p>
                <h2 className="mt-2 text-2xl font-heading text-white">
                  Assets for journalists, creators, and curators
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <PressButton href={pressKitZip}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Press Kit
                </PressButton>
                <PressButton href={trailerUrl} variant="ghost">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Trailer
                </PressButton>
                <PressButton
                  href={`mailto:${pressEmail}?subject=The%20Last%20Elf%20Review%20Key`}
                  variant="ghost"
                >
                  <KeyRound className="mr-2 h-4 w-4" />
                  Request a Key
                </PressButton>
              </div>
            </div>
          </DarkPanel>
        </div>
      </section>

      <section className="bg-black py-12 md:py-16">
        <div className="container mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="space-y-6">
            <DarkPanel className="p-6 md:p-8">
              <SectionTitle
                eyebrow="About This Game"
                title="Offline Dark Fantasy Action RPG"
                icon={<Sword className="h-6 w-6 text-primary" />}
              />
              <div className="space-y-5 text-base leading-relaxed text-neutral-300 md:text-lg">
                <p>
                  The Last Elf is an offline third-person dark fantasy action RPG
                  where the final surviving elf fights through ruined castles,
                  cursed forests, monsters, demons, and arena battles in a
                  focused story-driven adventure.
                </p>
                <p>
                  The Last Elf is a single-player dark fantasy action RPG built
                  around real-time melee combat, exploration, progression, and
                  story. Players dodge, strike, manage stamina, hunt monsters,
                  face corrupted creatures, and survive demon boss encounters
                  across ruined castles, twisted forests, cursed lands, and
                  dungeon-style areas.
                </p>
                <p>
                  The game is designed as a focused offline RPG experience rather
                  than a live-service RPG. There is no PvP and no gacha. The
                  focus is on one character, one journey, and a ruined world that
                  the player has to push through fight by fight.
                </p>
              </div>
            </DarkPanel>

            <DarkPanel className="p-6 md:p-8">
              <SectionTitle eyebrow="Features" title="What to Cover" />
              <div className="grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex gap-3 rounded-md border border-white/10 bg-black/35 p-4"
                  >
                    <feature.icon className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-neutral-200">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </DarkPanel>

            <DarkPanel className="p-6 md:p-8">
              <SectionTitle
                eyebrow="Screenshots"
                title={`All Screenshots (${allScreenshots.length})`}
                icon={<ImageIcon className="h-6 w-6 text-primary" />}
              />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {allScreenshots.map((screenshot) => (
                  <figure
                    key={screenshot.src}
                    className="group overflow-hidden rounded-md border border-white/10 bg-neutral-950"
                  >
                    <a
                      href={screenshot.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block aspect-video"
                    >
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </a>
                    <figcaption className="border-t border-white/10 px-4 py-3 text-xs uppercase tracking-[0.18em] text-neutral-300">
                      <span>{screenshot.caption}</span>
                      <a
                        href={screenshot.src}
                        download
                        className="mt-2 inline-flex items-center gap-2 text-primary hover:text-amber-300"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Download
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div className="mt-7">
                <PressButton href={screenshotsZip} variant="ghost">
                  <Download className="mr-2 h-4 w-4" />
                  Download screenshots
                </PressButton>
              </div>
            </DarkPanel>

            <DarkPanel className="p-6 md:p-8">
              <SectionTitle
                eyebrow="Trailer and B-roll"
                title="Video Assets"
                icon={<Clapperboard className="h-6 w-6 text-primary" />}
              />
              <div className="grid items-center gap-6 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="overflow-hidden rounded-lg border border-white/10 bg-black">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={trailerEmbedUrl}
                      title="The Last Elf Trailer"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div>
                  <p className="text-neutral-400">
                    Use the trailer for coverage, listicles, first looks, and
                    indie RPG discovery segments.
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <PressButton href={trailerUrl} variant="ghost">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Trailer
                    </PressButton>
                    <PressButton href={trailerMp4} variant="ghost">
                      <Download className="mr-2 h-4 w-4" />
                      Download Trailer MP4
                    </PressButton>
                    <PressButton href={brollZip} variant="ghost">
                      <Download className="mr-2 h-4 w-4" />
                      Download B-roll
                    </PressButton>
                  </div>
                </div>
              </div>
            </DarkPanel>

            <DarkPanel className="p-6 md:p-8">
              <SectionTitle
                eyebrow="Logos and Key Art"
                title="Brand and Store Assets"
              />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {pressAssets.map((asset) => (
                  <a
                    key={asset.href}
                    href={asset.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="group rounded-md border border-white/10 bg-black/35 p-4 transition-colors hover:border-primary/40"
                  >
                    <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-sm bg-black/70">
                      <Image
                        src={asset.src}
                        alt={asset.alt}
                        fill
                        sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw"
                        className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-heading text-sm text-white">
                        {asset.title}
                      </h3>
                      <Download className="h-4 w-4 shrink-0 text-primary" />
                    </div>
                  </a>
                ))}
              </div>
            </DarkPanel>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <DarkPanel className="p-5">
              <SectionTitle
                eyebrow="Fact Sheet"
                title="Game Info"
                icon={<ScrollText className="h-5 w-5 text-primary" />}
              />
              <dl className="space-y-4">
                {factSheet.map(([label, value]) => (
                  <div
                    key={label}
                    className="border-b border-white/10 pb-4 last:border-b-0"
                  >
                    <dt className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                      {label}
                    </dt>
                    <dd className="mt-1 break-words text-sm text-neutral-100">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </DarkPanel>

            <DarkPanel className="p-5">
              <SectionTitle eyebrow="Store Links" title="Play and Wishlist" />
              <div className="space-y-3">
                {storeLinks.map((store) => (
                  <a
                    key={store.label}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-black/35 p-4 transition-colors hover:border-primary/40"
                  >
                    <span>
                      <span className="block font-heading text-white">
                        {store.label}
                      </span>
                      <span className="mt-1 block text-xs text-neutral-400">
                        {store.note}
                      </span>
                    </span>
                    <Image
                      src={store.iconSrc}
                      alt={store.iconAlt}
                      width={24}
                      height={24}
                      className={`h-6 w-6 shrink-0 ${
                        store.invertIcon ? "brightness-0 invert" : ""
                      }`}
                    />
                  </a>
                ))}
              </div>
            </DarkPanel>

            <DarkPanel className="p-5">
              <SectionTitle eyebrow="Creator Angles" title="Coverage Hooks" />
              <div className="space-y-3">
                {creatorAngles.map((angle) => (
                  <article
                    key={angle.title}
                    className="rounded-md border border-white/10 bg-black/35 p-4"
                  >
                    <Clapperboard className="mb-3 h-4 w-4 text-primary" />
                    <h3 className="font-heading text-white">{angle.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                      {angle.text}
                    </p>
                  </article>
                ))}
              </div>
            </DarkPanel>

            <DarkPanel className="p-5">
              <SectionTitle eyebrow="Contact" title="Press Requests" />
              <p className="text-sm leading-relaxed text-neutral-400">
                For review keys, press inquiries, creator coverage, or asset
                requests, contact:
              </p>
              <a
                href={`mailto:${pressEmail}`}
                className="mt-4 inline-flex items-center gap-2 text-primary hover:text-amber-300"
              >
                <Mail className="h-4 w-4" />
                {pressEmail}
              </a>
            </DarkPanel>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-20">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/press/art/Main-Capsule-2.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container relative mx-auto max-w-4xl px-4 text-center">
          <ImageIcon className="mx-auto mb-5 h-8 w-8 text-primary" />
          <h2 className="text-3xl font-heading font-bold text-white md:text-5xl">
            Download full press kit
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-neutral-300">
            Packaged screenshots, trailer files, logos, store art, and key art
            will live here once the final downloadable kit is published.
          </p>
          <div className="mt-8">
            <PressButton href={pressKitZip}>
              <Download className="mr-2 h-4 w-4" />
              Download full press kit
            </PressButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
