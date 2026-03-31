import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iOS and Android",
  description:
    "Watch the official trailer and access The Last Elf download links for iOS and Android.",
  alternates: {
    canonical: "/ios",
  },
};

export default function IosLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
