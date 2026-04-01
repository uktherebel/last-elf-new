import HeaderClient from "@/components/HeaderClient";

export default function Header() {
  return (
    <header className="sticky top-0 z-[60] border-b border-amber-500/25 bg-black/80 backdrop-blur-md">
      <HeaderClient />
    </header>
  )
}
