import Image from "next/image";
import Link from "next/link";
import { Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

type DockItem = {
  name: string;
  href: string;
  imgSrc?: string;
  icon?: "laptop";
  withoutBackground?: boolean;
};

const dockItems: DockItem[] = [
  {
    name: "iOS",
    href: "https://apps.apple.com/us/app/the-last-elf-dark-fantasy-rpg/id6758931119",
    imgSrc: "/store-logos/app-store-svgrepo-com.svg",
    withoutBackground: true,
  },
  {
    name: "macOS",
    href: "/ios",
    icon: "laptop",
    withoutBackground: true,
  },
  {
    name: "Android",
    href: "https://play.google.com/store/apps/details?id=com.conteza.games.thelastelf",
    imgSrc: "/store-logos/google-play-style-svgrepo-com.svg",
    withoutBackground: true,
  },
];

export function Dock() {
  return (
    <section
      aria-label="Platform dock"
      className="pointer-events-none fixed inset-x-0 bottom-2 z-[55] flex justify-center px-2 pb-[env(safe-area-inset-bottom)] sm:bottom-3"
    >
      <div className="pointer-events-auto w-full max-w-md rounded-3xl border border-amber-300/25 bg-neutral-900/70 p-2 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md">
        <div className="flex items-end justify-center gap-1 overflow-x-auto px-1 py-1 sm:gap-2">
          {dockItems.map((item) => (
            <AppIcon
              key={item.name}
              href={item.href}
              label={item.name}
              imgSrc={item.imgSrc}
              icon={item.icon}
              withoutBackground={item.withoutBackground}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppIcon({
  href,
  label,
  imgSrc,
  icon,
  withoutBackground,
}: Readonly<{
  href: string;
  label: string;
  imgSrc?: string;
  icon?: "laptop";
  withoutBackground?: boolean;
}>) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const sharedClassName =
    "group grid w-fit place-items-center gap-1 rounded-2xl p-1 text-neutral-300 transition-colors hover:text-white";

  const content = (
    <>
      <div
        className={cn(
          "inline-flex size-11 transform-gpu items-center justify-center overflow-hidden rounded-2xl border border-amber-200/25 bg-black/60 p-2 shadow-inner transition-all duration-200 group-hover:scale-110 group-hover:border-amber-200/45 group-hover:shadow-[0_8px_20px_-12px_rgba(245,198,92,0.9)] sm:size-14",
          withoutBackground ? "p-2.5 sm:p-3" : "",
        )}
      >
        {icon === "laptop" ? (
          <Laptop className="size-full text-neutral-100" />
        ) : imgSrc ? (
          <Image
            alt={label}
            className={cn(
              "size-full",
              withoutBackground ? "object-contain" : "object-cover",
            )}
            height={96}
            src={imgSrc}
            width={96}
          />
        ) : null}
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-[0.08em] sm:text-xs">
        {label}
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={sharedClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-label={label}
      className={sharedClassName}
    >
      {content}
    </Link>
  );
}

export default Dock;
