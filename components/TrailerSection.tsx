export default function TrailerSection() {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,160,23,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.04),transparent_35%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-5/12">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/80 mb-4">
              Official Trailer
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Witness the Hunt
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-6">
              Step into the dark — steel flashing, rain falling, demons closing
              in. This is the tone, pace, and brutality that define The Last
              Elf.
            </p>
            <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.22em] text-neutral-200">
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
                Third-person combat
              </span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
                Boss scale
              </span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
                Rain-soaked siege
              </span>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.7)] bg-black/60">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/1z0FyfoEv-E?si=rz2HHDMjTP5C1fnL"
                  title="The Last Elf Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />
              <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-white/5 via-transparent to-white/10 opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
