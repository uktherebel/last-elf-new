import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import { siteName, siteUrl } from "@/lib/seo";
import Header from "@/components/Header";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/RPGGame-Logo-Icon-MainMenu/logo-ios.png",
    shortcut: "/RPGGame-Logo-Icon-MainMenu/logo-ios.png",
    apple: "/RPGGame-Logo-Icon-MainMenu/logo-ios.png",
  },
  title: {
    default: "The Last Elf | Offline Dark Fantasy Action RPG",
    template: `%s | ${siteName}`,
  },
  description:
    "The Last Elf is an offline dark fantasy action RPG with story-driven adventure, sword combat, monster hunting, arena battles, and demon boss fights.",
  keywords: [
    "The Last Elf",
    "offline RPG",
    "dark fantasy action RPG",
    "third-person RPG",
    "hack and slash",
    "monster hunting game",
    "demon boss fights",
    "story-driven adventure game",
    "offline mobile RPG",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: "The Last Elf | Offline Dark Fantasy Action RPG",
    description:
      "Play as the final elf in a ruined realm. Hunt monsters, master sword combat, and defeat powerful demon bosses.",
    images: [
      {
        url: "/RPG-Game-Capsules-22-January-2026/MainCapsule.jpg",
        width: 1200,
        height: 630,
        alt: "The Last Elf dark fantasy action RPG artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Last Elf | Offline Dark Fantasy Action RPG",
    description:
      "Offline dark fantasy RPG with sword combat, monster hunting, and demon boss battles.",
    images: ["/RPG-Game-Capsules-22-January-2026/MainCapsule.jpg"],
  },
  verification: {
    google: "0pxRxZfaozfYffGR9MjHAy-2bV1pX_-7mtlPijLlc8Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
