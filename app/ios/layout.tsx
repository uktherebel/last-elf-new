import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Last Elf: Dark Fantasy RPG | iOS and macOS",
  description:
    "The Last Elf: Dark Fantasy RPG is available for iOS, iPadOS, and Mac with story-driven adventure, sword combat, monster hunting, and demon boss battles.",
  keywords: [
    "demon",
    "hunter",
    "elf",
    "monster",
    "boss",
    "dungeon",
    "offline",
    "elden ring",
    "story",
    "adventure",
    "sword",
    "hack and slash",
  ],
  alternates: {
    canonical: "/ios",
  },
};

export default function IosLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
