export default function SeoStoryContent() {
  const pillars = [
    {
      title: "Offline Action RPG Adventure",
      body: "Enjoy an offline single-player action RPG focused on combat, exploration, progression, and story. Fight through cursed lands and survive deadly encounters in a dark fantasy world.",
    },
    {
      title: "Sword Combat and Hack and Slash Battles",
      body: "Fight in real-time with responsive sword combat and fast hack and slash gameplay. Use timing, movement, and weapon choices to adapt against different enemy types.",
    },
    {
      title: "Hunt Monsters and Defeat Demon Bosses",
      body: "Hunt savage beasts, destroy corrupted creatures, and take on demon boss fights that test reflexes and strategy. Every battle pushes you deeper into the mystery of the ruined elf realm.",
    },
    {
      title: "Dark Fantasy Story and Cinematic World",
      body: "Experience a story-driven adventure told through atmosphere, world design, and high-stakes survival. From ruined lands to dungeon-like areas, every location is crafted to feel dark, immersive, and memorable.",
    },
  ];

  const highlights = [
    "Offline dark fantasy action RPG",
    "Story-driven single-player adventure",
    "Fast sword combat and hack-and-slash gameplay",
    "Demon, monster, and boss battles",
    "Weapon switching and meaningful progression",
  ];

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 rounded-2xl border border-white/10 bg-neutral-950 p-8 md:p-10">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-500">
            Story Overview
          </p>
          <h2 className="mb-4 text-3xl font-heading text-white md:text-4xl">
            Become The Last Elf
          </h2>
          <p className="text-lg leading-relaxed text-neutral-300">
            The world is falling into darkness. Demons have invaded the land,
            monsters roam the ruins, and the ancient elf guardians have been
            destroyed. Only one survivor remains. You are The Last Elf, the
            final hope of a broken realm.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-xl border border-white/10 bg-neutral-950/70 p-6"
            >
              <h3 className="mb-3 text-2xl font-heading text-white">
                {pillar.title}
              </h3>
              <p className="leading-relaxed text-neutral-400">{pillar.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-neutral-950/60 p-6">
          <h3 className="mb-4 text-xl font-heading text-white">
            Why Play The Last Elf
          </h3>
          <ul className="grid gap-2 text-neutral-300 md:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="rounded-md bg-black/40 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
