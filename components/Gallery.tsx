"use client";

import {
    CircularGallery,
    type GalleryItem,
} from "@/components/ui/circular-gallery";

const galleryData: GalleryItem[] = [
    {
        common: "Castle Approach",
        binomial: "A ruined path into the dark kingdom",
        photo: {
            url: "/Screenshots - Refined/dark-fantasy-castle-approach.png",
            text: "The Last Elf exploring a ruined dark fantasy castle approach",
            pos: "50% 50%",
            by: "The Last Elf",
        },
    },
    {
        common: "Warrior Stance",
        binomial: "Ready for real-time sword combat",
        photo: {
            url: "/Screenshots - Refined/elf-warrior-combat-stance.png",
            text: "The Last Elf warrior preparing for a real-time sword fight",
            pos: "50% 50%",
            by: "The Last Elf",
        },
    },
    {
        common: "Night Battle",
        binomial: "Monster hordes close in after sunset",
        photo: {
            url: "/Screenshots - Refined/monster-horde-night-battle.png",
            text: "The Last Elf battling monster hordes at night",
            pos: "50% 50%",
            by: "The Last Elf",
        },
    },
    {
        common: "Dungeon Clash",
        binomial: "Hack and slash combat in tight ruins",
        photo: {
            url: "/Screenshots - Refined/dungeon-hack-and-slash-scene.png",
            text: "Hack and slash combat scene in a dungeon-style area",
            pos: "50% 50%",
            by: "The Last Elf",
        },
    },
    {
        common: "Demon Encounter",
        binomial: "A corrupted enemy waits in the cursed lands",
        photo: {
            url: "/Screenshots - Refined/cursed-lands-demon-encounter.png",
            text: "Demon encounter in the cursed lands of The Last Elf",
            pos: "50% 50%",
            by: "The Last Elf",
        },
    },
    {
        common: "Ruined World",
        binomial: "Offline exploration across a fallen realm",
        photo: {
            url: "/Screenshots - Refined/ruined-world-exploration-elf.png",
            text: "Offline RPG exploration scene in the ruined world of The Last Elf",
            pos: "50% 50%",
            by: "The Last Elf",
        },
    },
];

export default function Gallery() {
    return (
        <section className="h-[420vh] bg-black text-white">
            <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-4">
                <div className="pointer-events-none absolute top-16 z-10 text-center">
                    <h2 className="text-3xl font-heading text-white md:text-4xl">
                        Into the Darkness
                    </h2>
                    <p className="mt-3 text-sm text-neutral-400">
                        Scroll to rotate the gallery
                    </p>
                </div>
                <div className="h-full w-full pt-16">
                    <CircularGallery
                        items={galleryData}
                        radius={520}
                        autoRotateSpeed={0.025}
                    />
                </div>
            </div>
        </section>
    );
}
