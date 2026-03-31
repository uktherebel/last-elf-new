import Link from "next/link";

const socials = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@lastelfgame",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@thelastelf-f3t?si=ZcNR0S7TBLHfb144",
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/the-last-elf/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lastelfgame/",
  },
  {
    label: "Discord",
    href: null,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/lastelfgame",
  },
  {
    label: "Twitter/X",
    href: "https://x.com/lastelfgame",
  },
];

const downloads = [
  {
    label: "iOS",
    href: "https://apps.apple.com/us/app/the-last-elf-dark-fantasy-rpg/id6758931119",
  },
  {
    label: "Android",
    href: "https://play.google.com/store/apps/details?id=com.conteza.games.thelastelf",
  },
  {
    label: "macOS",
    href: null,
  },
  {
    label: "Steam",
    href: null,
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-[60] border-b border-amber-500/25 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link
          href="/"
          className="rounded-md border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100 transition hover:border-amber-300/60 hover:bg-amber-300/20"
        >
          Home
        </Link>

        <div className="flex items-center gap-2">
          <div className="group relative">
            <button
              type="button"
              className="rounded-md border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-100 transition hover:border-white/40 hover:bg-white/10"
            >
              Socials
            </button>
            <div className="pointer-events-none invisible absolute left-0 top-full w-44 rounded-lg border border-amber-300/20 bg-zinc-950/95 p-3 opacity-0 shadow-2xl transition duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
              <div className="flex flex-col gap-2">
                {socials.map((social) =>
                  social.href ? (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-200 transition hover:text-amber-200"
                    >
                      {social.label}
                    </a>
                  ) : (
                    <span key={social.label} className="text-sm text-neutral-500">
                      {social.label}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              className="rounded-md border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-100 transition hover:border-white/40 hover:bg-white/10"
            >
              Download
            </button>
            <div className="pointer-events-none invisible absolute left-0 top-full w-44 rounded-lg border border-amber-300/20 bg-zinc-950/95 p-3 opacity-0 shadow-2xl transition duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
              <div className="flex flex-col gap-2">
                {downloads.map((download) =>
                  download.href ? (
                    <a
                      key={download.label}
                      href={download.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-200 transition hover:text-amber-200"
                    >
                      {download.label}
                    </a>
                  ) : (
                    <span key={download.label} className="text-sm text-neutral-500">
                      {download.label}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
