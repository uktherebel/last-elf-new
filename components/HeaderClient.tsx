"use client";

import dynamic from "next/dynamic";

const Navbar5 = dynamic(
  () => import("@/components/ui/navbar-5").then((mod) => mod.Navbar5),
  { ssr: false },
);

export default function HeaderClient() {
  return <Navbar5 />;
}
