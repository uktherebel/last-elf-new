import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="bg-neutral-950 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-heading font-bold text-white md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-balance text-neutral-400">
            Quick answers about gameplay, story, platform availability, and the
            core experience of The Last Elf.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-2xl border border-amber-300/20 bg-black/50 px-6 py-3 shadow-[0_0_0_1px_rgba(212,160,23,0.08)] md:px-8"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index + 1}`}
                className="border-dashed border-amber-200/15"
              >
                <AccordionTrigger className="cursor-pointer text-left text-base font-semibold text-amber-100 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base leading-relaxed text-neutral-300">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-6 px-2 text-neutral-400 md:px-4">
            Need more help? Visit our{" "}
            <Link
              href="/support"
              className="font-semibold text-amber-300 hover:text-amber-200 hover:underline"
            >
              support page
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export { faqs };
