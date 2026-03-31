import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-neutral-950 py-16 border-t border-neutral-900">
            <div className="container mx-auto px-4 text-center">

                {/* Final Call to Action */}
                <div className="mb-16">
                    <h2 className="text-4xl font-heading text-white mb-6">The Hunt Awaits</h2>
                    <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                        {/* CTA Buttons row */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            {/* App Store Badge */}
                            <a
                                href="https://apps.apple.com/us/app/the-last-elf-dark-fantasy-rpg/id6758931119"
                                target="_blank"
                                className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 border-2 border-black rounded-xl px-4 py-2 text-black transition-transform hover:scale-105 font-sans min-w-[170px]"
                            >
                                <Image src="/store-icons/Apple.svg" alt="Apple App Store" width={32} height={32} className="w-8 h-8 -mt-1" />
                                <div className="flex flex-col items-start justify-center text-left">
                                    <span className="text-[11px] leading-tight font-medium tracking-wide">Download on the</span>
                                    <span className="text-[22px] font-semibold tracking-tight leading-none">App Store</span>
                                </div>
                            </a>

                            {/* Google Play Badge */}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.conteza.games.thelastelf"
                                target="_blank"
                                className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 border-2 border-black rounded-xl px-4 py-2 text-black transition-transform hover:scale-105 font-sans min-w-[170px]"
                            >
                                <Image src="/store-icons/Playstore.svg" alt="Google Play" width={30} height={30} className="w-[28px] h-[28px]" />
                                <div className="flex flex-col items-start justify-center text-left">
                                    <span className="text-[11px] leading-tight font-medium uppercase tracking-wide cursor-default">GET IT ON</span>
                                    <span className="text-[22px] font-semibold tracking-tight leading-none">Google Play</span>
                                </div>
                            </a>
                            {/* Steam Badge */}
                            <div
                                className="flex items-center justify-center gap-3 bg-neutral-900 border-2 border-neutral-800 rounded-xl px-4 py-2 text-neutral-500 font-sans min-w-[170px] cursor-not-allowed opacity-60"
                            >
                                <Image src="/store-logos/steam-svgrepo-com.svg" alt="Steam" width={32} height={32} className="w-8 h-8 grayscale contrast-50" />
                                <div className="flex flex-col items-start justify-center text-left">
                                    <span className="text-[11px] leading-tight font-medium uppercase tracking-wide">COMING SOON ON</span>
                                    <span className="text-[22px] font-semibold tracking-tight leading-none">Steam</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-neutral-500">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link href="/support" className="hover:text-white transition-colors">Support</Link>
                </div>

                <div className="text-neutral-600 text-xs">
                    <p>© {new Date().getFullYear()} The Last Elf. All rights reserved.</p>
                    <p className="mt-2 text-neutral-700">Images and trademarks are property of their respective owners.</p>
                </div>
            </div>
        </footer>
    );
}
