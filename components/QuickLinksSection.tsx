"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Laptop,
  LifeBuoy,
  Menu,
  Shield,
  Smartphone,
} from "lucide-react";
import CircularNavigation from "@/components/ui/cicular-navigation-bar";
import { Button } from "@/components/ui/button";

const mobileNavItems = [
  { name: "iOS/macOS", icon: Laptop, href: "/ios" },
  { name: "Android", icon: Smartphone, href: "/android" },
  { name: "Support", icon: LifeBuoy, href: "/support" },
  { name: "Privavy", icon: Shield, href: "/privacy" },
  { name: "Terms", icon: FileText, href: "/terms" },
];

export default function QuickLinksSection() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(true);

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-6 text-center text-3xl font-heading text-white">
          Platforms and Support
        </h2>
        <div
          className="mb-2 flex justify-center sm:hidden"
          onMouseEnter={openMenu}
        >
          <Button
            onClick={openMenu}
            onFocus={openMenu}
            className="gap-2 rounded-full px-6"
          >
            <Menu className="h-4 w-4" />
            Open Navigation
          </Button>
        </div>
        <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-5">
          <Link
            href="/ios"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/10 bg-neutral-950 p-4 text-center text-neutral-200 transition-colors hover:border-white/30 hover:text-white"
          >
            iOS and macOS
          </Link>
          <Link
            href="/android"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/10 bg-neutral-950 p-4 text-center text-neutral-200 transition-colors hover:border-white/30 hover:text-white"
          >
            Android
          </Link>
          <Link
            href="/support"
            className="rounded-md border border-white/10 bg-neutral-950 p-4 text-center text-neutral-200 transition-colors hover:border-white/30 hover:text-white"
          >
            Support
          </Link>
          <Link
            href="/privacy"
            className="rounded-md border border-white/10 bg-neutral-950 p-4 text-center text-neutral-200 transition-colors hover:border-white/30 hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="rounded-md border border-white/10 bg-neutral-950 p-4 text-center text-neutral-200 transition-colors hover:border-white/30 hover:text-white"
          >
            Terms of Use
          </Link>
        </div>
      </div>
      <CircularNavigation
        navItems={mobileNavItems}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      />
    </section>
  );
}
