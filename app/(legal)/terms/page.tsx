export default function TermsPage() {
    return (
        <main className="min-h-screen bg-black text-white py-20 px-4">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-4xl font-heading mb-8">Terms of Service</h1>
                <section className="prose prose-invert">
                    <p>By downloading or playing The Last Elf, you agree to these terms.</p>
                    <h3>Usage</h3>
                    <p>The game is for personal, non-commercial use only.</p>
                    <h3>Subscriptions</h3>
                    <p>Any subscriptions offered are managed through the Apple App Store or respective platform.</p>
                    {/* Add full terms here */}
                </section>
            </div>
        </main>
    );
}
