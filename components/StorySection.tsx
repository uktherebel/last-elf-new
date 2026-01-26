export default function StorySection() {
  return (
    <section className="relative py-32 flex items-center justify-center">
      {/* Background - using a dark moody gradient or image */}
      <div className="absolute inset-0 z-0 bg-neutral-900">
        {/* You could place a blurred image here */}
        <div className="absolute inset-0 bg-[url('/RPG-Game-Capsules-22-January-2026/MainCapsule.jpg')] bg-cover bg-center opacity-20 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 px-4 text-center max-w-4xl mx-auto">
        <blockquote className="text-2xl md:text-4xl font-heading text-neutral-300 italic leading-relaxed mb-8">
          "When the walls fell, the hunt began. The world is broken, and you are
          the only one left to finish what was started."
        </blockquote>
        <div className="flex justify-center gap-8 text-neutral-500 font-body uppercase tracking-widest text-sm">
          <span>The Hero</span>
          <span>•</span>
          <span>The Demon</span>
          <span>•</span>
          <span>The Truth</span>
        </div>
      </div>
    </section>
  );
}
