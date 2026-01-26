import { Sword, Scroll, User } from "lucide-react";

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

        <div className="grid md:grid-cols-3 gap-12">
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
