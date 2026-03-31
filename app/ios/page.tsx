"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Youtube,
    Instagram,
    Monitor,
} from "lucide-react";

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

export default function IosPage() {
    const tags = [
        "demon",
        "hunter",
        "elf",
        "monster",
        "boss",
        "dungeon",
        "offline",
        "elden ring",
        "story",
        "adventure",
        "sword",
        "hack and slash",
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-neutral-700 selection:text-white p-4 md:p-6">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-12 py-8 md:py-12">
                {/* Header/Logo */}
                <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
                    <span className="sr-only">Home</span>
                    <h1 className="text-2xl font-bold tracking-[0.2em] uppercase text-neutral-400">The Last Elf</h1>
                </Link>

                {/* Trailer */}
                <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.7)] bg-black/60 relative">
                    <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/1z0FyfoEv-E?si=rz2HHDMjTP5C1fnL"
                        title="The Last Elf Trailer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />
                </div>

                <div className="text-center flex flex-col items-center gap-6">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider">
                        iOS and macOS
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center justify-center gap-8 text-neutral-300"
                    >
                        <a
                            href="https://apps.apple.com/us/app/the-last-elf-dark-fantasy-rpg/id6758931119"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                            title="Download on iOS"
                        >
                            <Image
                                src="/store-icons/Apple.svg"
                                alt="Apple App Store"
                                width={32}
                                height={32}
                                className="h-8 w-8 brightness-0 invert"
                            />
                            <span className="font-bold tracking-wider text-xl">iOS</span>
                        </a>
                        <span
                            className="flex items-center gap-2 opacity-50 cursor-not-allowed"
                            title="macOS (not released yet)"
                        >
                            <Monitor className="w-8 h-8" />
                            <span className="font-bold tracking-wider text-xl">
                                macOS
                            </span>
                        </span>
                    </motion.div>
                </div>

                <section className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wider text-neutral-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-8 space-y-8 text-neutral-200">
                        <p>
                            The Last Elf is a dark fantasy Action RPG inspired by ancient mythology.
                            Played from a third-person perspective, the game follows the journey of the
                            final surviving Elf in a world on the brink of extinction. Built as a
                            focused single-player action-adventure, the experience emphasizes immersion,
                            atmosphere, and meaningful progression over filler content.
                        </p>

                        <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-bold text-white">Game Story</h3>
                            <p>
                                The world has fallen into darkness. Ruthless demons and monstrous
                                creatures have invaded the land, seeking to destroy the elven and human
                                realms.
                            </p>
                            <p>
                                The ancient protectors of humans, the Elves, were caught off guard in a
                                brutal assault and were wiped out, their sacred realms reduced to ashes.
                                Against all odds, one Elf survived.
                            </p>
                            <p>
                                You are The Last Elf, the final hope of a broken world. Armed with
                                special powers and unyielding courage, you must rise from the ruins,
                                hunt down the invading monsters, and confront the demonic forces
                                threatening humanity&apos;s existence. The fate of the world now rests in
                                your hands.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                Combat-Driven Action RPG Gameplay
                            </h3>
                            <p>
                                At its core, The Last Elf is a combat-first third-person Action RPG
                                built around responsive controls and skill-based encounters. Engage in
                                real-time battles where precision, timing, and adaptability are key.
                            </p>
                            <p>
                                Improve your fighting approach using the weapons you collect on the way
                                and face a wide variety of enemies, each designed to challenge different
                                playstyles. From relentless monster hordes to powerful demon bosses,
                                every fight is designed to feel impactful.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                Battles and Abilities
                            </h3>
                            <p>
                                The game&apos;s experience is fast and skill-based. Fight monsters and
                                powerful demon bosses using your Elf&apos;s abilities, timing, and strategy.
                                Customize your playstyle by changing your weapons from inventory and
                                adapt to different enemies and challenges. Every encounter feels
                                meaningful and keeps the action exciting.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                Cinematic and Immersive Experience
                            </h3>
                            <p>
                                The game delivers a cinematic presentation supported by an atmospheric
                                visual style and sound design. Dynamic lighting, dark fantasy
                                environments, and carefully paced moments create a constant sense of
                                tension and immersion.
                            </p>
                            <p>
                                Every element, from combat animations to world design, works together to
                                pull players deeper into the experience, making the journey of The Last
                                Elf feel personal and intense.
                            </p>
                        </div>

                        <p className="text-white font-semibold">
                            Download the Last Elf now to play and beat the demons from conquering the
                            world!
                        </p>
                    </div>
                </section>

                {/* Social Links */}
                <div className="flex gap-8 text-neutral-400 mt-4">
                    <span
                        className="opacity-50 cursor-not-allowed"
                        title="Discord"
                    >
                        <DiscordIcon className="w-6 h-6" />
                    </span>
                    <a
                        href="https://www.tiktok.com/@lastelfgame"
                        className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="TikTok"
                    >
                        <TikTokIcon className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.reddit.com/user/the-last-elf/"
                        className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Reddit"
                    >
                        <RedditIcon className="w-6 h-6" />
                    </a>
                    <a
                        href="https://youtube.com/@thelastelf-f3t?si=ZcNR0S7TBLHfb144"
                        className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="YouTube"
                    >
                        <Youtube className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.instagram.com/lastelfgame/"
                        className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                    >
                        <Instagram className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </main>
    );
}
