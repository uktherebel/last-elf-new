export default function SupportPage() {
    return (
        <main className="min-h-screen bg-black px-4 py-20 text-white">
            <div className="container mx-auto max-w-4xl space-y-10">
                <h1 className="text-4xl font-heading">Support</h1>

                <section className="space-y-4 text-white/90">
                    <h2 className="text-2xl font-heading">About Conteza</h2>
                    <p>
                        At Conteza, we are more than a mobile app development company. We focus on building mobile
                        experiences with AI at the core so products are functional, intuitive, personalized, and
                        future-ready.
                    </p>
                    <h3 className="text-xl font-heading">Our Vision</h3>
                    <p>
                        Conteza&apos;s vision is to build mobile applications that adapt to user needs and make everyday
                        tasks simpler, faster, and smarter.
                    </p>
                    <h3 className="text-xl font-heading">Why AI Integration</h3>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Personalization through understanding preferences, behaviors, and habits.</li>
                        <li>Efficiency through automation of complex processes.</li>
                        <li>Scalability through systems that improve over time.</li>
                        <li>Innovation through features like predictive analytics and machine learning.</li>
                    </ul>
                </section>

                <section className="space-y-4 text-white/90">
                    <h2 className="text-2xl font-heading">Contact Details</h2>
                    <p>Conteza LLC</p>
                    <p>5318 Eliots Oak Rd</p>
                    <p>Columbia MD 21044</p>
                    <p>+1 443 538 5797</p>
                </section>

                <section className="space-y-4 text-white/90">
                    <h2 className="text-2xl font-heading">Support Form</h2>
                    <a
                        href="https://conteza.com/contact-us.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400"
                    >
                        Open Conteza Support Form
                    </a>
                </section>
            </div>
        </main>
    );
}
