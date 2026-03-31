import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Last Elf | iOS and macOS",
  description:
    "The Last Elf is a dark fantasy third-person Action RPG for iOS and macOS with story-driven adventure, sword combat, monster hunting, and demon boss battles.",
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
