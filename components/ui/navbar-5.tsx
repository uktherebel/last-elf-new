"use client"

import Image from "next/image"
import Link from "next/link"
import { MenuIcon, Monitor } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  appStoreUrl,
  googlePlayUrl,
  macAppStoreUrl,
  steamWishlistUrl,
} from "@/lib/store-links"
import { cn } from "@/lib/utils"

type NavItem = {
  title: string
  description: string
  href: string | null
}

const socials: NavItem[] = [
  {
    title: "TikTok",
    description: "Short gameplay clips and updates",
    href: "https://www.tiktok.com/@lastelfgame",
  },
  {
    title: "YouTube",
    description: "Trailers and long-form gameplay",
    href: "https://youtube.com/@thelastelf-f3t?si=ZcNR0S7TBLHfb144",
  },
  {
    title: "Reddit",
    description: "Community posts and discussions",
    href: "https://www.reddit.com/user/the-last-elf/",
  },
  {
    title: "Instagram",
    description: "Screenshots and highlights",
    href: "https://www.instagram.com/lastelfgame/",
  },
  {
    title: "Discord",
    description: "Coming soon",
    href: null,
  },
  {
    title: "Facebook",
    description: "Announcements and media",
    href: "https://www.facebook.com/lastelfgame",
  },
]

const downloads: NavItem[] = [
  {
    title: "iOS",
    description: "Download on the App Store",
    href: appStoreUrl,
  },
  {
    title: "Android",
    description: "Get it on Google Play",
    href: googlePlayUrl,
  },
  {
    title: "macOS",
    description: "Download on the Mac App Store",
    href: macAppStoreUrl,
  },
  {
    title: "Steam",
    description: "Wishlist on Steam",
    href: steamWishlistUrl,
  },
]

const legalLinks = [
  { label: "Press Kit", href: "/press" },
  { label: "Support", href: "/support" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
]

const isExternal = (href: string) =>
  href.startsWith("https://") || href.startsWith("http://")

const MenuGrid = ({ items }: { items: NavItem[] }) => (
  <div className="grid w-[640px] grid-cols-2 gap-1 p-3">
    {items.map((item) =>
      item.href ? (
        <NavigationMenuLink
          key={item.title}
          href={item.href}
          target={isExternal(item.href) ? "_blank" : undefined}
          rel={isExternal(item.href) ? "noopener noreferrer" : undefined}
          className="rounded-md border border-transparent p-3 transition-colors hover:border-amber-300/30 hover:bg-amber-300/10"
        >
          <p className="mb-1 font-semibold text-foreground">{item.title}</p>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </NavigationMenuLink>
      ) : (
        <div
          key={item.title}
          className="rounded-md border border-transparent p-3 text-muted-foreground/70"
        >
          <p className="mb-1 font-semibold">{item.title}</p>
          <p className="text-sm">{item.description}</p>
        </div>
      ),
    )}
  </div>
)

export const Navbar5 = () => {
  return (
    <section className="py-3">
      <div className="container mx-auto max-w-6xl px-4">
        <nav className="flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/RPGGame-Logo-Icon-MainMenu/logo-ios.png"
              alt="The Last Elf"
              width={34}
              height={34}
              className="h-8 w-8 rounded-md border border-amber-300/40 object-cover"
            />
            <span className="font-heading text-base font-semibold tracking-[0.08em] text-amber-100 sm:text-lg">
              The Last Elf
            </span>
          </Link>

          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-amber-50 hover:bg-amber-400/10 hover:text-amber-100">
                  Socials
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-lg border-amber-300/20 bg-zinc-950/95">
                  <MenuGrid items={socials} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-amber-50 hover:bg-amber-400/10 hover:text-amber-100">
                  Download
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-lg border-amber-300/20 bg-zinc-950/95">
                  <MenuGrid items={downloads} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              {legalLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-amber-50 hover:bg-amber-400/10 hover:text-amber-100",
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              asChild
              variant="ghost"
              className="h-10 w-10 rounded-none border-0 bg-transparent p-0 shadow-none hover:bg-transparent focus-visible:ring-1 focus-visible:ring-amber-300"
            >
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on iOS"
                title="Download on iOS"
              >
                <Image
                  src="/store-icons/Apple.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-7 w-7 brightness-0 invert"
                />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-10 w-10 rounded-none border-0 bg-transparent p-0 shadow-none hover:bg-transparent focus-visible:ring-1 focus-visible:ring-amber-300"
            >
              <a
                href={macAppStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on Mac"
                title="Download on Mac"
              >
                <Monitor className="h-7 w-7 text-white" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-10 w-10 rounded-none border-0 bg-transparent p-0 shadow-none hover:bg-transparent focus-visible:ring-1 focus-visible:ring-amber-300"
            >
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on Android"
                title="Download on Android"
              >
                <Image
                  src="/store-icons/Playstore.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-7 w-7"
                />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-10 w-10 rounded-none border-0 bg-transparent p-0 shadow-none hover:bg-transparent focus-visible:ring-1 focus-visible:ring-amber-300"
            >
              <a
                href={steamWishlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wishlist on Steam"
                title="Wishlist on Steam"
              >
                <Image
                  src="/store-logos/steam-svgrepo-com.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="h-8 w-8"
                />
              </a>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                className="border-amber-400/35 bg-black/20 text-amber-100 hover:border-amber-300/60 hover:bg-amber-300/15"
              >
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="max-h-screen overflow-auto border-b border-amber-300/20 bg-zinc-950 text-foreground"
            >
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="/RPGGame-Logo-Icon-MainMenu/logo-ios.png"
                      alt="The Last Elf"
                      width={34}
                      height={34}
                      className="h-8 w-8 rounded-md border border-amber-300/40 object-cover"
                    />
                    <span className="font-heading text-base font-semibold tracking-[0.08em] text-amber-100">
                      The Last Elf
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mb-2 mt-4">
                  <AccordionItem value="socials" className="border-amber-300/20">
                    <AccordionTrigger className="text-base text-amber-100 hover:no-underline">
                      Socials
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-1 md:grid-cols-2">
                        {socials.map((item) =>
                          item.href ? (
                            <a
                              key={item.title}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-md p-3 transition-colors hover:bg-amber-300/10"
                            >
                              <p className="mb-1 font-semibold text-foreground">
                                {item.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          ) : (
                            <div
                              key={item.title}
                              className="rounded-md p-3 text-muted-foreground/70"
                            >
                              <p className="mb-1 font-semibold">{item.title}</p>
                              <p className="text-sm">{item.description}</p>
                            </div>
                          ),
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="download"
                    className="border-amber-300/20"
                  >
                    <AccordionTrigger className="text-base text-amber-100 hover:no-underline">
                      Download
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-1 md:grid-cols-2">
                        {downloads.map((item) =>
                          item.href ? (
                            <a
                              key={item.title}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-md p-3 transition-colors hover:bg-amber-300/10"
                            >
                              <p className="mb-1 font-semibold text-foreground">
                                {item.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          ) : (
                            <div
                              key={item.title}
                              className="rounded-md p-3 text-muted-foreground/70"
                            >
                              <p className="mb-1 font-semibold">{item.title}</p>
                              <p className="text-sm">{item.description}</p>
                            </div>
                          ),
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex flex-col gap-4">
                  {legalLinks.map((link) => (
                    <Link key={link.label} href={link.href} className="font-medium">
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-amber-400/35 bg-black/20 text-amber-100 hover:border-amber-300/60 hover:bg-amber-300/15"
                  >
                    <a
                      href={appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download on iOS
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-amber-400/35 bg-black/20 text-amber-100 hover:border-amber-300/60 hover:bg-amber-300/15"
                  >
                    <a
                      href={macAppStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download on Mac
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-amber-500 text-black hover:bg-amber-400"
                  >
                    <a
                      href={googlePlayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download on Android
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-neutral-500/40 bg-neutral-950/70 text-neutral-100 hover:border-neutral-300/60 hover:bg-neutral-800"
                  >
                    <a
                      href={steamWishlistUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wishlist on Steam
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  )
}
