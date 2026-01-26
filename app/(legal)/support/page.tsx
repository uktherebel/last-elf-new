export default function SupportPage() {
    return (
        <main className="min-h-screen bg-black text-white py-20 px-4">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-4xl font-heading mb-8">Support</h1>
                <section className="prose prose-invert">
                    <h3>Contact Us</h3>
                    <p>If you encounter any issues, please contact us at support@example.com.</p>
                    <h3>Subscriptions</h3>
                    <p>To cancel a subscription, please visit your Apple ID settings.</p>
                    <h3>Known Issues</h3>
                    <p>Check our community forums for updates on known bugs.</p>
                </section>
            </div>
        </main>
    );
}
