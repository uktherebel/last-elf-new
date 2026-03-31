import Image from "next/image";

export default function PlatformStrip() {
    return (
        <div className="w-full bg-neutral-900 border-y border-neutral-800 py-4">
            <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 items-center text-neutral-400 text-sm font-semibold tracking-widest uppercase">
                <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                     App Store
                </span>
                <span className="hidden w-1 h-1 bg-neutral-700 rounded-full sm:block" />
                <span className="flex items-center gap-2 opacity-50 cursor-default">
                    <Image src="/store-logos/steam-svgrepo-com.svg" alt="Steam" width={16} height={16} className="w-4 h-4 grayscale" />
                    Steam release later
                </span>
                <span className="hidden w-1 h-1 bg-neutral-700 rounded-full sm:block" />
                <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                    Mac App Store
                </span>
                <span className="hidden w-1 h-1 bg-neutral-700 rounded-full sm:block" />
                <span className="text-neutral-500">
                    Controller Supported
                </span>
            </div>
        </div>
    );
}
