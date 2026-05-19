"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export type PressMediaItem = {
  type: "video" | "image";
  title: string;
  src: string;
  thumbnail: string;
  alt: string;
  embedUrl?: string;
  watchUrl?: string;
};

export default function PressMediaCarousel({
  items,
}: {
  items: PressMediaItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-black shadow-[0_22px_70px_-45px_rgba(212,160,23,0.45)]">
      <div className="relative aspect-video bg-black">
        {activeItem.type === "video" && activeItem.embedUrl ? (
          <iframe
            className="h-full w-full"
            src={activeItem.embedUrl}
            title={activeItem.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <a
            href={activeItem.src}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full w-full"
          >
            <Image
              src={activeItem.src}
              alt={activeItem.alt}
              fill
              priority={activeIndex === 0}
              sizes="(min-width: 1024px) 64vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
            />
          </a>
        )}

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.45),transparent_18%,transparent_82%,rgba(0,0,0,0.45))]" />

        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Previous media"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition-colors hover:border-primary/60 hover:bg-black/80"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next media"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition-colors hover:border-primary/60 hover:bg-black/80"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-primary">
              {activeItem.type === "video" ? "Trailer" : "Screenshot"}
            </p>
            <h2 className="mt-1 text-xl font-heading text-white md:text-2xl">
              {activeItem.title}
            </h2>
          </div>
          {activeItem.type === "image" ? (
            <Button
              asChild
              className="h-auto w-fit rounded-md border border-white/15 bg-black/65 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white hover:border-primary/60 hover:bg-black/85"
            >
              <a href={activeItem.src} download>
                <Download className="mr-2 h-4 w-4" />
                Download
              </a>
            </Button>
          ) : activeItem.watchUrl ? (
            <Button
              asChild
              className="h-auto w-fit rounded-md border border-white/15 bg-black/65 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white hover:border-primary/60 hover:bg-black/85"
            >
              <a
                href={activeItem.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch
              </a>
            </Button>
          ) : null}
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/65 p-3">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {items.map((item, index) => (
            <button
              key={`${item.type}-${item.src}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${item.title}`}
              className={`group relative h-20 w-36 shrink-0 overflow-hidden rounded-md border bg-neutral-950 transition-colors ${
                index === activeIndex
                  ? "border-primary"
                  : "border-white/10 hover:border-primary/45"
              }`}
            >
              <Image
                src={item.thumbnail}
                alt={item.alt}
                fill
                sizes="144px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {item.type === "video" ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                  <Play className="h-8 w-8 fill-white/15 text-white" />
                </div>
              ) : null}
              <span className="sr-only">{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
