"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Youtube,
    Instagram,
    Facebook,
    Twitter,
    Apple,
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

export default function IosPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-neutral-700 selection:text-white flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-12">
                {/* Header/Logo */}
                <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
                    <span className="sr-only">Home</span>
                    {/* Fallback text if logo isn't available or just to keep it simple as user asked for "only Trailer, Pre-order soon, badges, social links" */}
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

                {/* Pre-order Content */}
                <div className="text-center flex flex-col items-center gap-6">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider">
                        Pre-order Soon
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center justify-center gap-8 text-neutral-300"
                    >
                        <div className="flex items-center gap-2">
                            <Apple className="w-8 h-8" />
                            <span className="font-bold tracking-wider text-xl">iOS</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Monitor className="w-8 h-8" />
                            <span className="font-bold tracking-wider text-xl">macOS</span>
                        </div>
                    </motion.div>
                </div>

                {/* Social Links */}
                <div className="flex gap-8 text-neutral-400 mt-4">
                    <a
                        href="#"
                        className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
                        title="Discord"
                    >
                        <DiscordIcon className="w-6 h-6" />
                    </a>
                    <a
                        href="#"
                        className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
                        title="Reddit"
                    >
                        <RedditIcon className="w-6 h-6" />
                    </a>
                    <a
                        href="https://youtube.com/@thelastelf-f3t?si=ZcNR0S7TBLHfb144"
                        className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
                        target="_blank"
                        title="YouTube"
                    >
                        <Youtube className="w-6 h-6" />
                    </a>
                    <a
                        href="#"
                        className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
                        title="Instagram"
                    >
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a
                        href="#"
                        className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
                        title="Twitter"
                    >
                        <Twitter className="w-6 h-6" />
                    </a>
                    <a
                        href="#"
                        className="hover:text-white transition-transform transition-colors duration-200 hover:scale-125"
                        title="Facebook"
                    >
                        <Facebook className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </main>
    );
}
