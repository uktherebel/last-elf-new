import Image from "next/image";

const screenshots = [
    {
        src: "/Screenshots - Refined/dark-fantasy-castle-approach.png",
        alt: "The Last Elf exploring a ruined dark fantasy castle approach",
    },
    {
        src: "/Screenshots - Refined/elf-warrior-combat-stance.png",
        alt: "The Last Elf warrior preparing for a real-time sword fight",
    },
    {
        src: "/Screenshots - Refined/monster-horde-night-battle.png",
        alt: "The Last Elf battling monster hordes at night",
    },
    {
        src: "/Screenshots - Refined/dungeon-hack-and-slash-scene.png",
        alt: "Hack and slash combat scene in a dungeon-style area",
    },
    {
        src: "/Screenshots - Refined/cursed-lands-demon-encounter.png",
        alt: "Demon encounter in the cursed lands of The Last Elf",
    },
    {
        src: "/Screenshots - Refined/ruined-world-exploration-elf.png",
        alt: "Offline RPG exploration scene in the ruined world of The Last Elf",
    },
];

export default function Gallery() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-heading text-white text-center mb-12">Into the Darkness</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {screenshots.map((item, index) => (
                        <div key={index} className="relative aspect-video group overflow-hidden rounded-md border border-white/10">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
