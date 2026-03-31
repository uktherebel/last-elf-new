import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Read The Last Elf privacy policy and data handling information.",
    alternates: {
        canonical: "/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-black px-4 py-20 text-white">
            <div className="container mx-auto max-w-4xl space-y-8">
                <h1 className="mb-2 text-4xl font-heading">Privacy Policy</h1>

                <section className="space-y-6 text-white/90">
                    <p>
                        We at Conteza care about the privacy of data shared by our users and are dedicated to protecting
                        client privacy. This policy explains what information we collect, why we collect it, and how we
                        use it.
                    </p>
                    <p>
                        This policy is for users concerned about how Personally Identifiable Information (PII) is used
                        online. Under US privacy law and information security guidance, PII refers to information that
                        can identify, locate, or contact an individual on its own or with other data.
                    </p>
                </section>

                <section className="space-y-6 text-white/90">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Scope</h2>
                        <p>
                            This policy relates to information acquired through use of Conteza&apos;s site, software,
                            applications, and services, and should be read together with Conteza terms and license
                            agreements.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Information We Collect</h2>
                        <p>
                            We may collect Personal Data, which may identify you, and Non-Personal Data, which cannot be
                            linked back to you.
                        </p>
                        <p>
                            When you create an account, you may provide data such as email address, username, contact
                            information, language preference, and payment-related details when applicable.
                        </p>
                        <p>
                            We also collect user content you upload, enter, or transfer while using our services.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Automatically Collected Information</h2>
                        <p>
                            We may automatically record location indicators, log data, usage data, device information,
                            and cookie-related data while you use our services.
                        </p>
                        <p>
                            We collect this information when you fill forms, subscribe, place orders, use chat, open a
                            support ticket, or otherwise submit information through our services.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">How We Use Information</h2>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>Provide and operate site, software, app, and service functionality.</li>
                            <li>Respond to support requests and account-access issues.</li>
                            <li>Process transactions.</li>
                            <li>Improve features, algorithms, reliability, and performance.</li>
                            <li>Send product or service updates and notices, subject to applicable consent rules.</li>
                            <li>Detect misuse, abuse, fraud, and security risks.</li>
                            <li>Display and maintain user content associated with your account.</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">User Content Review</h2>
                        <p>
                            Conteza employees do not monitor all user content by default. Content may be reviewed when
                            required for support, policy enforcement, legal compliance, security, or service improvement.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Data Sharing and Disclosure</h2>
                        <p>Conteza may disclose Personal Data only in limited scenarios, including:</p>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>With your permission.</li>
                            <li>With service providers acting under Conteza instructions.</li>
                            <li>To investigate violations, fraud, unlawful activity, or safety threats.</li>
                            <li>To comply with legal obligations or lawful government requests.</li>
                            <li>During acquisition, merger, reorganization, bankruptcy, or asset sale events.</li>
                            <li>When sharing aggregated or non-personal reporting data.</li>
                        </ul>
                        <p>Conteza states that it does not sell or rent Personal Data.</p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Cookies and Advertising</h2>
                        <p>
                            Conteza uses cookies and related technologies to support functionality, analytics, and
                            advertising operations.
                        </p>
                        <p>Cookies may be used to:</p>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>Help remember and process shopping cart items.</li>
                            <li>Save preferences for future visits.</li>
                            <li>Track and analyze user activity for product improvement.</li>
                        </ul>
                        <p>
                            You can disable cookies in browser settings, though some features may not work correctly if
                            cookies are turned off.
                        </p>
                        <p>
                            Conteza also references Google advertising practices. Informational references in the source
                            policy include:
                        </p>
                        <p>https://support.google.com/adwordspolicy/answer/1316548?hl=en</p>
                        <p>www.allaboutcookies.org</p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Do Not Track and Children&apos;s Privacy</h2>
                        <p>
                            Conteza states it honors Do Not Track signals and does not knowingly collect personal
                            information from children under 13.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Data Transfer, Storage, and Security</h2>
                        <p>
                            Information may be processed and stored in the United States. Conteza states it uses
                            encryption in transit and applies physical, technical, and logical safeguards.
                        </p>
                        <p>
                            No internet transmission method is fully secure, and users should secure their own devices as
                            well.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Deletion and Retention</h2>
                        <p>
                            Users may request deletion of personal data, though some data may be retained for legitimate
                            business purposes and legal obligations such as fraud prevention, tax, audit, and reporting.
                        </p>
                        <p>
                            In case of account closure due to terms violations, deletion requests may still be reviewed
                            subject to legal obligations.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Regulatory Notes</h2>
                        <p>
                            The policy includes references to CalOPPA, Fair Information Practices, and user rights for
                            people in the European Economic Area (EEA), including rights to access, correct, delete,
                            and object to certain processing activities.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Policy Updates</h2>
                        <p>
                            Conteza may update this policy when services, business operations, or legal requirements
                            change. Continued use after revisions indicates acceptance of updated terms.
                        </p>
                    </div>
                </section>

                <section className="space-y-6 text-white/90">
                    <h2 className="text-2xl font-heading">Mobile Apps Privacy Policy</h2>
                    <p>
                        Conteza&apos;s mobile-app policy states that registration data, transaction information, support
                        communications, and certain usage information may be collected to provide app features and
                        communications.
                    </p>
                    <p>
                        The policy also describes third-party service-provider involvement under privacy constraints,
                        opt-out choices, data-retention windows, and children&apos;s privacy protections.
                    </p>
                </section>

                <section className="space-y-4 text-white/90">
                    <h2 className="text-2xl font-heading">Use of TrueDepth API</h2>
                    <p>
                        Conteza states that Apple TrueDepth API data may be used to power face-tracking AR features such
                        as filters, hairstyle previews, beard styles, makeup, sticker overlays, and similar visual
                        effects.
                    </p>
                    <p>According to the policy, this data is used only for real-time AR effects and includes:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Facial tracking data like position, expression, and blend-shape values.</li>
                        <li>Depth and face-geometry data used to align AR effects.</li>
                    </ul>
                    <p>The policy states that TrueDepth and face-tracking data:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Is not stored permanently.</li>
                        <li>Is not uploaded to third-party servers.</li>
                        <li>Is processed in real time and discarded immediately.</li>
                        <li>Is not used for identification, authentication, surveillance, or profiling.</li>
                    </ul>
                </section>

                <section className="space-y-4 text-white/90">
                    <h2 className="text-2xl font-heading">Face Data and Image Processing</h2>
                    <p>
                        The policy states that camera captures and uploaded images are used only to deliver requested
                        app features such as facial recognition or movement-based effects.
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Purpose-limited use for requested functionality.</li>
                        <li>No sale or sharing of face-related data with third parties.</li>
                        <li>No permanent storage of camera captures.</li>
                        <li>Temporary storage of uploaded images only for processing, then automatic deletion.</li>
                    </ul>
                </section>

                <section className="space-y-4 text-white/90">
                    <h2 className="text-2xl font-heading">Text Data Collection and Processing</h2>
                    <p>
                        Conteza states that some app features process submitted text for plagiarism checks, AI
                        detection, humanization, grammar checks, and sentiment analysis.
                    </p>
                    <p>The policy states:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>User-submitted text may be transmitted securely for processing.</li>
                        <li>Sentiment analysis uses OpenAI API services.</li>
                        <li>No account creation is required for these features.</li>
                        <li>No collection of direct personal identifiers such as names or emails for this flow.</li>
                        <li>Submitted text is not retained for training and is deleted after processing.</li>
                        <li>No analytics tracking or ad identifiers are used for this text-processing flow.</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
