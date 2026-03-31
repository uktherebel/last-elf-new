import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Use",
    description:
        "Read The Last Elf terms of use and legal conditions for gameplay.",
    alternates: {
        canonical: "/terms",
    },
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-black px-4 py-20 text-white">
            <div className="container mx-auto max-w-4xl space-y-8">
                <h1 className="mb-2 text-4xl font-heading">Terms of Service</h1>
                <p className="text-white/80">Terms of Use</p>

                <section className="space-y-6 text-white/90">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Basic Terms</h2>
                        <p>While using our application, you abide by the following terms:</p>
                        <ol className="list-decimal space-y-2 pl-6">
                            <li>You will be liable for every activity that takes place within your user profile.</li>
                            <li>You are responsible for protecting any password that you may use to access this app.</li>
                            <li>No abuse, harassment, threats, impersonation, or bullying is allowed.</li>
                            <li>
                                This app should not be used for any unlawful or unlicensed purpose. If you are an
                                international user, you are bound with local cyber laws of using, distributing content,
                                and should follow online conduct.
                            </li>
                            <li>
                                All information, text, data, screenname, photos, images, display, and post are your
                                sole and primary responsibility.
                            </li>
                            <li>You should not use the content of any other app and imply that it is related to this app.</li>
                            <li>
                                No unwanted or illegitimate publicity, promotions, spam mail, channel lists, pyramid
                                systems or any other type of request must be uploaded, posted, emailed, forwarded, or
                                otherwise made accessible to any user.
                            </li>
                            <li>
                                You should not alter or interrupt this app&apos;s server or controlling channels such as
                                transfer of viruses, bugs, or any other form of damage applied locally, state-wide,
                                nationally, or internationally.
                            </li>
                            <li>
                                You should not deliberately or involuntarily violate any local, state, national, or
                                foreign laws while using the app. Infringement of any of these contracts will lead to
                                your account being canceled. By using this app, you agree that our application is not
                                responsible for content posted by users.
                            </li>
                        </ol>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">General Conditions</h2>
                        <ol className="list-decimal space-y-2 pl-6">
                            <li>At any moment and for any reason, we retain the right to modify or cancel our service without notice.</li>
                            <li>
                                We retain the right to alter or revise these terms at any moment. Your continued use of
                                this app accounts for your approval of such revisions or alterations.
                            </li>
                            <li>
                                We retain the right to refuse service for anyone with reasonable cause, decided in our
                                sole discretion.
                            </li>
                            <li>
                                We have no responsibility to remove material or accounts that contain content that we
                                determine to be illegal, disrespectful, defamatory, or menacing.
                            </li>
                            <li>
                                As a condition of using this app, you agree that we have the right to possess, use, and
                                publicize details gathered from this app&apos;s users collectively.
                            </li>
                            <li>
                                We have the right to retrieve usernames that are under legal claims or trademarks and
                                belong to other businesses or individuals.
                            </li>
                        </ol>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Disclaimer</h2>
                        <p>
                            You are solely responsible for using this service. No warranties are offered with this
                            service. This service is offered on an AS AVAILABLE basis.
                        </p>
                        <p>You agree not to use this app to:</p>
                        <ol className="list-decimal space-y-2 pl-6">
                            <li>
                                Make any material accessible that is illegal, damaging, offensive, insulting, annoying,
                                or otherwise intolerable by sharing links or mailing.
                            </li>
                            <li>
                                Make any content accessible that violates copyrighted content or encourages infringement
                                of intellectual property rights, including patents, trademarks, or other intangible assets.
                            </li>
                            <li>
                                Make available any uncertified or unsolicited promotional content, spam mail, pyramid
                                schemes, or other unauthorized material.
                            </li>
                            <li>Falsely represent or imitate any person or business, including application officials.</li>
                            <li>Defy the requirements, policies, or guidelines associated with this app.</li>
                        </ol>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Discriminatory and Controversial Content</h2>
                        <p>
                            We never intend to hurt the feelings of any ethnic, religious, sexual, or other group by
                            sharing discriminatory or controversial content. We maintain a strict review policy and do
                            not intend to offend sentiments or discriminate based on protected characteristics.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Content on This Application</h2>
                        <p>
                            Content on this application is created by a professional team and does not intend to copy
                            third-party copyrighted material. Content belongs to its creators and licensors.
                        </p>
                        <p>
                            If you believe any content matches your copyrighted material, contact us with proof so we
                            can review and remove it when appropriate.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Subscriptions</h2>
                        <p>
                            Subscriptions allow subscribers to use the product continuously or regularly over a specific
                            period. Paid subscriptions begin when payment is received. Users must maintain recurring
                            payments on time to avoid service interruption.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Billing Terms via Apple ID</h2>
                        <p>
                            While subscribing, users can use the Apple ID associated with their App Store account and
                            follow in-app purchase instructions. By subscribing, users acknowledge and accept that:
                        </p>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>All due payments are charged to the user&apos;s Apple ID account.</li>
                            <li>
                                Subscriptions must be canceled at least 24 hours before the end of the current period
                                to avoid automatic renewal.
                            </li>
                            <li>Renewal fees are charged within a 24-hour period before renewal.</li>
                            <li>Users can manage or cancel subscriptions in App Store account settings.</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Billing Terms via Play Store</h2>
                        <p>
                            Users can subscribe through their Google Play account by following the in-app instructions.
                            By subscribing, users agree that:
                        </p>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>Subscription payments are charged to the user&apos;s Google Play account.</li>
                            <li>After trial periods, payments may be charged automatically.</li>
                            <li>
                                Subscriptions renew automatically for the same plan if not canceled at least 24 hours
                                before expiration.
                            </li>
                            <li>Renewal charges are processed within 24 hours before plan expiration.</li>
                            <li>Users can manage or cancel subscriptions in Google Play account settings.</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Refund Policy</h2>
                        <p>
                            For App Store purchases, refunds are managed by Apple. In-app purchases may renew
                            automatically and users are responsible for canceling future renewals.
                        </p>
                        <p>
                            For Google Play purchases, users may contact the developer or Google Play depending on
                            purchase timing and issue type, including requests made within 48 hours where applicable.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading">Copyright</h2>
                        <p>
                            Content on this app, including images, text, and videos, is protected by copyright and
                            trademark law. Except for user-uploaded content, material available in the app is the
                            property of this app and its licensors.
                        </p>
                        <p>
                            These terms do not grant rights to use the app name, domain name, trademarks, templates,
                            or other distinguishing features.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
