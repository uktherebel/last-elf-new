const faqs = [
  {
    question: "Is The Last Elf an offline game?",
    answer:
      "Yes. The Last Elf is designed as an offline single-player action RPG experience.",
  },
  {
    question: "Is The Last Elf third-person or first-person?",
    answer:
      "The Last Elf is a third-person dark fantasy action RPG with real-time sword combat.",
  },
  {
    question: "What kind of gameplay does The Last Elf have?",
    answer:
      "It features hack and slash combat, monster hunting, arena battles, boss fights, exploration, and progression.",
  },
  {
    question: "Can I play The Last Elf on iOS and Android?",
    answer:
      "Yes. The game is available on iOS and Android through the App Store and Google Play.",
  },
  {
    question: "Does The Last Elf have a story?",
    answer:
      "Yes. The game is story-driven and follows the final surviving elf in a ruined, demon-infested realm.",
  },
  {
    question: "Is there multiplayer or PvP in The Last Elf?",
    answer:
      "No. The Last Elf is a focused single-player adventure built around offline progression and combat.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-neutral-950 py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-center text-3xl font-heading text-white md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-lg border border-white/10 bg-black/40 p-6"
            >
              <h3 className="mb-2 text-xl font-semibold text-white">
                {faq.question}
              </h3>
              <p className="leading-relaxed text-neutral-400">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { faqs };
