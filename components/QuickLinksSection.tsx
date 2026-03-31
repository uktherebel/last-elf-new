import Link from "next/link";

export default function QuickLinksSection() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-6 text-center text-3xl font-heading text-white">
          Platforms and Support
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/ios"
            className="rounded-md border border-white/10 bg-neutral-950 p-4 text-center text-neutral-200 transition-colors hover:border-white/30 hover:text-white"
          >
            iOS and macOS Page
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
    </section>
  );
}
