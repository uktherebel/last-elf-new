import Image from "next/image";
import { cn } from "@/lib/utils";

const sections = [
    {
        title: "Visceral Combat",
        description: "Combat rewards timing, positioning, and stamina management. No button mashing—every strike counts.",
        image: "/Screenshots - Refined/Whisk_ctmljwoknwo3mtmi1solddotq2y2qtlifgny0co.png",
        align: "left",
    },
    {
        title: "Explore the Ruins",
        description: "Venture into forgotten castles and twisted forests. Find hidden paths, ancient weapons, and the secrets of the Last Elf.",
        image: "/Screenshots - Refined/Whisk_ito1mwnmnwo1qmyy0iyifjytatm3qtl0mtm10iz.png",
        align: "right",
    },
    {
        title: "Earn Your Power",
        description: "Progression is earned, not bought. Gather gold, upgrade your gear, and master your skills to survive.",
        image: "/Screenshots - Refined/Whisk_qznhdjnhjwz2ewo40szxidotimzyqtlknzni1ym.png",
        align: "left",
    },
];

export default function GameplayDeepDive() {
    return (
        <section className="py-24 bg-neutral-950 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-32">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex flex-col lg:flex-row items-center gap-12 lg:gap-24",
                                section.align === "right" ? "lg:flex-row-reverse" : ""
                            )}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                                    <Image
                                        src={section.image}
                                        alt={section.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                {/* Decorative elements */}
                                <div className={cn(
                                    "absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/30",
                                    section.align === "right" ? "right-auto -left-4 border-r-0 border-l-2" : ""
                                )} />
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2">
                                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                                    {section.title}
                                </h3>
                                <p className="text-lg text-neutral-400 leading-relaxed">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
