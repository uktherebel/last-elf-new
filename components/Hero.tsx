"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  Apple,
  Smartphone,
  Gamepad2,
  Monitor,
} from "lucide-react";

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

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <Image
          src="/RPG-Game-Capsules-22-January-2026/MainCapsule1.jpg"
          alt="The Last Elf Background"
          fill
          className="object-cover"
          priority
          draggable={false}
        />
      </div>

      {/* Left Socials Sidebar */}
      <div className="absolute left-8 bottom-0 top-0 flex flex-col justify-center items-center z-20 hidden md:flex">
        <div className="flex flex-col gap-6 items-center">
          <span className="text-neutral-400 text-xs font-bold tracking-[0.3em] uppercase -rotate-90 whitespace-nowrap mb-8">
            Follow Us
          </span>
          <div className="flex flex-col gap-6 text-neutral-400">
            <a
              href="#"
              className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
              title="Discord"
            >
              <DiscordIcon className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
              title="Reddit"
            >
              <RedditIcon className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@thelastelf-f3t?si=ZcNR0S7TBLHfb144"
              className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
              target="_blank"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <div className="h-24 w-[1px] bg-neutral-700 mt-8" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pb-24">
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
            Offline, story-first, third-person dark fantasy ARPG
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 items-center justify-center mb-12 w-full max-w-2xl"
        >
          <a
            href="#"
            className="py-4 px-8 bg-white hover:bg-neutral-200 text-black font-heading font-bold text-xl transition-all tracking-widest uppercase flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <Apple className="w-6 h-6" />
            Pre-order on App Store (soon)
          </a>

          {/* Secondary Button */}
          <a
            href="https://youtube.com/@thelastelf-f3t?si=ZcNR0S7TBLHfb144"
            target="_blank"
            className="py-4 px-8 bg-transparent border border-neutral-600 hover:border-white hover:bg-white/5 text-neutral-300 hover:text-white font-heading font-bold text-xl transition-all tracking-widest uppercase flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <Youtube className="w-6 h-6" />
            Watch trailer
          </a>
        </motion.div>

        {/* Platform Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-8 md:gap-12 text-neutral-300"
        >
          <div
            className="flex items-center gap-2 transition-colors group opacity-50 cursor-default"
            title="Page coming soon"
          >
            <Gamepad2 className="w-8 h-8" />
            <div className="flex flex-col text-left">
              <span className="font-bold tracking-wider hidden sm:block">
                STEAM
              </span>
              <span className="text-[10px] tracking-tight text-neutral-500">
                RELEASE LATER
              </span>
            </div>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
          >
            <Monitor className="w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            <span className="font-bold tracking-wider hidden sm:block">
              macOS
            </span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
          >
            <Apple className="w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            <span className="font-bold tracking-wider hidden sm:block">
              iOS
            </span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
          >
            <Smartphone className="w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            <span className="font-bold tracking-wider hidden sm:block">
              Android
            </span>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-2 left-0 right-0 text-center z-20">
        <p className="text-neutral-500 text-xs tracking-[0.3em] uppercase animate-pulse">
          Scroll down for more
        </p>
      </div>
    </section>
  );
}
