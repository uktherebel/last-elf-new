"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Offline Action RPG Adventure",
    description:
      "Enjoy an offline single-player action RPG focused on combat, exploration, progression, and story in a dangerous dark fantasy world.",
    image: "/crousel-imgs/offline-adventure-rpg.jpg",
  },
  {
    title: "Sword Combat and Hack and Slash Battles",
    description:
      "Fight in real-time with responsive sword combat and fast hack and slash gameplay built around timing, movement, and skill.",
    image: "/crousel-imgs/sword-combat.png",
  },
  {
    title: "Hunt Monsters and Defeat Demon Bosses",
    description:
      "Hunt savage beasts, destroy corrupted creatures, and survive powerful demon boss encounters that test reflexes and strategy.",
    image: "/crousel-imgs/hunt-monsters-demon-bosses.png",
  },
  {
    title: "Dark Fantasy Story and Cinematic World",
    description:
      "Experience a story-driven dark fantasy adventure with immersive world design, dramatic atmosphere, and memorable locations.",
    image: "/crousel-imgs/dark-fantasy-story.png",
  },
  {
    title: "Arena Battles and Survival Trials",
    description:
      "Enter brutal arena fights where enemy waves and elite threats push your combat mastery to the limit.",
    image: "/crousel-imgs/arena.png",
  },
];

export default function SeoStoryContent() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-500">
            Story Overview
          </p>
          <h2 className="text-3xl font-heading text-white md:text-4xl">
            Become The Last Elf
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
          <div className="relative aspect-[16/9]">
            {slides.map((slide, idx) => (
              <div
                key={slide.title}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  idx === active ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/75" />
                <div className="absolute left-0 right-0 top-0 p-5 md:p-8">
                  <h3 className="max-w-3xl text-xl font-heading text-white md:text-3xl">
                    {slide.title}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                  <p className="max-w-3xl text-sm leading-relaxed text-neutral-100 md:text-lg">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                setActive((prev) => (prev - 1 + slides.length) % slides.length)
              }
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/55 px-3 py-2 text-lg text-white transition-colors hover:border-white/70"
            >
              &#8592;
            </button>

            <button
              type="button"
              onClick={() => setActive((prev) => (prev + 1) % slides.length)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/55 px-3 py-2 text-lg text-white transition-colors hover:border-white/70"
            >
              &#8594;
            </button>
          </div>

          <div className="flex items-center justify-center border-t border-white/10 bg-black/60 px-4 py-3">
            <div className="flex items-center gap-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setActive(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    idx === active ? "bg-white" : "bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
