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
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#"
                            className="px-8 py-4 bg-white text-black font-bold rounded-sm tracking-wider uppercase hover:bg-neutral-200 transition-colors inline-flex items-center gap-3"
                        >
                            <Image src="/store-logos/app-store-svgrepo-com.svg" alt="App Store" width={24} height={24} className="w-6 h-6" /> Download on App Store
                        </a>
                        <div
                            className="px-8 py-4 bg-transparent border border-neutral-700 text-neutral-400 font-bold rounded-sm tracking-wider uppercase cursor-default"
                        >
                            Steam release later (page coming soon)
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
