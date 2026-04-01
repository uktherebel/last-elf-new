"use client";

import { useState } from "react";
import CircularNavigation from "@/components/ui/cicular-navigation-bar";
import {
  Home,
  Film,
  Music,
  Trophy,
  FileText,
  Settings,
  Search,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Movies", icon: Film, href: "/movies" },
  { name: "Music", icon: Music, href: "/music" },
  { name: "Sports", icon: Trophy, href: "/sports" },
  { name: "News", icon: FileText, href: "/news" },
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Search", icon: Search, href: "/search" },
];

export default function CircularNavDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <Button onClick={toggleMenu} className="gap-2">
          <Menu className="h-4 w-4" />
          Open Navigation
        </Button>
      </div>
      <CircularNavigation
        navItems={navItems}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      />
    </>
  );
}
