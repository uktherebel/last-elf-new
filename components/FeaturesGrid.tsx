import { Sword, Scroll, User } from "lucide-react";
import StackingCards, {
  StackingCardItem,
} from "@/components/fancy/blocks/stacking-cards";

const features = [
  {
    icon: Sword,
    title: "Third-Person Combat",
    description: "Real-time melee. Dodge, strike, execute. Feel every hit.",
  },
  {
    icon: Scroll,
    title: "Dark Fantasy Story",
    description: "A short, focused narrative inspired by classic RPGs.",
  },
  {
    icon: User,
    title: "Solo, Story-First",
    description: "No PvP. No gacha. One character. One definitive journey.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading mb-4 text-neutral-200">
            What is The Last Elf?
          </h2>
            <div className="h-1 w-20 bg-neutral-800 mx-auto" />
        </div>

        <div className="md:hidden">
          <StackingCards
            className="mx-auto max-w-5xl"
            totalCards={features.length}
            scaleMultiplier={0.04}
          >
            {features.map((feature, index) => (
              <StackingCardItem
                key={index}
                index={index}
                className="h-[20rem]"
              >
                <div className="relative mx-auto h-[16rem] w-full max-w-3xl overflow-hidden rounded-3xl border border-neutral-700/70">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/card-bg.png')" }}
                  />
                  <div className="absolute inset-0 bg-black/55" />
                  <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                    <div className="mb-6 p-4 rounded-full bg-neutral-900/80 border border-neutral-700/80">
                      <feature.icon className="w-8 h-8 text-neutral-100" />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-200 leading-relaxed max-w-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StackingCardItem>
            ))}
          </StackingCards>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-full bg-neutral-900 border border-neutral-800 group-hover:border-neutral-600 transition-colors">
                <feature.icon className="w-8 h-8 text-neutral-300" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
