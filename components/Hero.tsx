"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { Youtube, Instagram, Facebook, Twitter } from "lucide-react";

// Custom Brand Icons
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
  >
    <title>Discord</title>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.699.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
  </svg>
);

const RedditIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
  >
    <title>Reddit</title>
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
  >
    <title>TikTok</title>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Create a scroll trigger
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate opacity for fading out the text elements.
  // We want it to be fully visible at 0%, and fade to 0 opacity by 30% of the scroll.
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const finalBottomTintOpacity = useTransform(
    scrollYProgress,
    [0.82, 0.96, 1],
    [0, 0.75, 1],
  );

  // Frame loading and rendering
  const frameCount = 109;
  const currentFrame = (index: number) =>
    `/portal-frames/${index.toString().padStart(4, "0")}.jpg`;

  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const renderFrame = (
    index: number,
    imgArray: HTMLImageElement[] = images,
  ) => {
    if (!canvasRef.current || !imgArray[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgArray[index];

    // Ensure image has actual dimensions before trying to draw
    if (!img.naturalWidth) return;

    // Mimic 'object-fit: cover' logic for the canvas
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const w = iw * scale;
    const h = ih * scale;
    const x = (cw - w) / 2;
    const y = (ch - h) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, x, y, w, h);
  };

  useEffect(() => {
    // Preload all frames
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image();
      img.src = currentFrame(i);
      loadedImages.push(img);
    }
    setImages(loadedImages);

    // Render the very first frame to the canvas immediately when it loads
    loadedImages[0].onload = () => {
      renderFrame(0, loadedImages);
    };
  }, []);

  // Sync scroll progress to canvas renders
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    const frameIndex = Math.min(
      images.length - 1,
      Math.floor(latest * frameCount),
    );
    renderFrame(frameIndex);
  });

  // Keep canvas sharp and correctly sized on resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame to match new dimensions
        renderFrame(
          Math.min(
            images.length - 1,
            Math.floor(scrollYProgress.get() * frameCount),
          ),
        );
      }
    };

    // Initial size setup
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <section ref={containerRef} className="relative h-[400vh] w-full bg-black">
      {/* 
        This div sticks to the top of the viewport for the duration of the 400vh scroll.
        Inside it, the actual content fades while the canvas scrubs the video frames.
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />

        {/* Fallback Image behind Canvas (visible only before frames load) */}
        <div className="absolute inset-0 z-[-1] select-none pointer-events-none">
          <Image
            src="/RPG-Game-Capsules-22-January-2026/MainCapsule1.jpg"
            alt="The Last Elf Background"
            fill
            className="object-cover"
            priority
            draggable={false}
          />
        </div>

        {/* Bottom fade for the final frame to blend into next section */}
        <motion.div
          style={{ opacity: finalBottomTintOpacity }}
          className="absolute bottom-0 left-0 right-0 h-56 z-[8] pointer-events-none bg-gradient-to-b from-transparent via-black/70 to-black"
        />

        {/* Dynamic Foreground Content, fades using contentOpacity */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="relative z-10 w-full h-full"
        >
          {/* Left Socials Sidebar */}
          <div className="absolute left-8 bottom-0 top-0 flex flex-col justify-center items-center z-20 hidden md:flex">
            <div className="flex flex-col gap-6 items-center">
              <span className="text-neutral-400 text-xs font-bold tracking-[0.3em] uppercase -rotate-90 whitespace-nowrap mb-8">
                Follow Us
              </span>
              <div className="flex flex-col gap-6 text-neutral-400">
                <a
                  href="https://www.tiktok.com/@lastelfgame"
                  className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
                  target="_blank"
                  title="TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@thelastelf-f3t?si=ZcNR0S7TBLHfb144"
                  className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
                  title="YouTube"
                  target="_blank"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.reddit.com/user/the-last-elf/"
                  className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
                  title="Reddit"
                  target="_blank"
                >
                  <RedditIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/lastelfgame/"
                  className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
                  title="Instagram"
                  target="_blank"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <span
                  className="opacity-50 cursor-not-allowed"
                  title="Discord (coming soon)"
                >
                  <DiscordIcon className="w-5 h-5" />
                </span>
                <span
                  className="opacity-50 cursor-not-allowed"
                  title="Twitter (coming soon)"
                >
                  <Twitter className="w-5 h-5" />
                </span>
                <span
                  className="opacity-50 cursor-not-allowed"
                  title="Facebook (coming soon)"
                >
                  <Facebook className="w-5 h-5" />
                </span>
              </div>
              <div className="h-24 w-[1px] bg-neutral-700 mt-8" />
            </div>
          </div>

          {/* Center Content */}
          <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <Image
                src="/RPGGame-Logo-Icon-MainMenu/RPGGame-Icon1.png"
                alt="The Last Elf Logo"
                width={576}
                height={576}
                className="mx-auto drop-shadow-2xl w-auto h-auto max-h-[40vh] md:max-h-[576px]"
              />
            </motion.div>

            {/* Clarity Lines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center gap-2 mb-8"
            >
              <p className="text-neutral-400 text-sm md:text-base tracking-wider uppercase">
                Offline, story-first, third-person dark fantasy Action RPG
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-center mb-12 w-full max-w-2xl"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* App Store Badge */}
                <a
                  href="https://apps.apple.com/us/app/the-last-elf-dark-fantasy-rpg/id6758931119"
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 border-2 border-black rounded-xl px-4 py-2 text-black transition-transform hover:scale-105 font-sans min-w-[170px]"
                >
                  <Image
                    src="/store-icons/Apple.svg"
                    alt="Apple App Store"
                    width={32}
                    height={32}
                    className="w-8 h-8 -mt-1"
                  />
                  <div className="flex flex-col items-start justify-center text-left">
                    <span className="text-[11px] leading-tight font-medium tracking-wide">
                      Download on the
                    </span>
                    <span className="text-[22px] font-semibold tracking-tight leading-none">
                      App Store
                    </span>
                  </div>
                </a>

                {/* Google Play Badge */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.conteza.games.thelastelf"
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 border-2 border-black rounded-xl px-4 py-2 text-black transition-transform hover:scale-105 font-sans min-w-[170px]"
                >
                  <Image
                    src="/store-icons/Playstore.svg"
                    alt="Google Play"
                    width={30}
                    height={30}
                    className="w-[28px] h-[28px]"
                  />
                  <div className="flex flex-col items-start justify-center text-left">
                    <span className="text-[11px] leading-tight font-medium uppercase tracking-wide cursor-default">
                      GET IT ON
                    </span>
                    <span className="text-[22px] font-semibold tracking-tight leading-none">
                      Google Play
                    </span>
                  </div>
                </a>

                {/* Steam Badge */}
                <div className="flex items-center justify-center gap-3 bg-neutral-900 border-2 border-neutral-800 rounded-xl px-4 py-2 text-neutral-500 font-sans min-w-[170px] cursor-not-allowed opacity-60">
                  <Image
                    src="/store-logos/steam-svgrepo-com.svg"
                    alt="Steam"
                    width={32}
                    height={32}
                    className="w-8 h-8 grayscale contrast-50"
                  />
                  <div className="flex flex-col items-start justify-center text-left">
                    <span className="text-[11px] leading-tight font-medium uppercase tracking-wide">
                      COMING SOON ON
                    </span>
                    <span className="text-[22px] font-semibold tracking-tight leading-none">
                      Steam
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Platform Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center gap-8 md:gap-12 text-neutral-300"
            >
              <span className="flex items-center gap-2 text-neutral-500 cursor-not-allowed group">
                <Image
                  src="/store-logos/app-store-svgrepo-com.svg"
                  alt="macOS"
                  width={32}
                  height={32}
                  className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                />
                <span className="font-bold tracking-wider hidden sm:block">
                  macOS
                </span>
              </span>
              <a
                href="https://apps.apple.com/us/app/the-last-elf-dark-fantasy-rpg/id6758931119"
                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
                target="_blank"
              >
                <Image
                  src="/store-logos/app-store-svgrepo-com.svg"
                  alt="iOS"
                  width={32}
                  height={32}
                  className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                />
                <span className="font-bold tracking-wider hidden sm:block">
                  iOS
                </span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.conteza.games.thelastelf"
                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
                target="_blank"
              >
                <Image
                  src="/store-logos/google-play-style-svgrepo-com.svg"
                  alt="Android"
                  width={32}
                  height={32}
                  className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                />
                <span className="font-bold tracking-wider hidden sm:block">
                  Android
                </span>
              </a>
            </motion.div>

            {/* Mobile Social Strip */}
            <div className="mt-8 flex items-center justify-center md:hidden">
              <div className="flex items-center gap-5 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-neutral-300 backdrop-blur-sm">
                <a
                  href="https://www.tiktok.com/@lastelfgame"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  title="TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@thelastelf-f3t?si=ZcNR0S7TBLHfb144"
                  className="hover:text-white transition-colors"
                  title="YouTube"
                  target="_blank"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.reddit.com/user/the-last-elf/"
                  className="hover:text-white transition-colors"
                  title="Reddit"
                  target="_blank"
                >
                  <RedditIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/lastelfgame/"
                  className="hover:text-white transition-colors"
                  title="Instagram"
                  target="_blank"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Watch Trailer Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 flex items-center justify-center"
            >
              <a
                href="https://www.youtube.com/watch?v=1z0FyfoEv-E"
                target="_blank"
                className="py-4 px-8 bg-transparent border border-neutral-600 hover:border-white hover:bg-white/5 text-neutral-300 hover:text-white font-heading font-bold text-xl transition-all tracking-widest uppercase flex items-center justify-center gap-2 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] rounded-md"
              >
                <Youtube className="w-6 h-6" />
                Watch trailer
              </a>
            </motion.div>
          </div>

          {/* Bottom gradient for smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />

          <div className="absolute bottom-2 left-0 right-0 text-center z-20">
            <p className="text-neutral-500 text-xs tracking-[0.3em] uppercase animate-pulse">
              Scroll down for more
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
