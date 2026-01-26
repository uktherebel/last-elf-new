export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-black text-white py-20 px-4">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-4xl font-heading mb-8">Privacy Policy</h1>
                <section className="prose prose-invert">
                    <p>Effective Date: January 2026</p>
                    <p>This privacy policy explains how we handle your data.</p>
                    <h3>Ads and Analytics</h3>
                    <p>We use third-party advertising and analytics services to support our game. These services may collect data about your device and usage.</p>
                    <h3>User Data</h3>
                    <p>We do not sell your personal data. Data collection is limited to what is necessary for game functionality and improvement.</p>
                    {/* Add full policy here */}
                </section>
            </div>
        </main>
    );
}
