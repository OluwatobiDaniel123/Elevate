import SEO from "@/components/SEO";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import EnquiryForm from "@/components/EnquiryForm";

const stageImage =
    "https://images.pexels.com/photos/30518233/pexels-photo-30518233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

export default function PrivateEvents() {
    return (
        <>
            <SEO
                title="Private & Corporate Events"
                description="Plan a private or corporate event at Elevate Bradford — corporate parties, brand activations, product launches, private parties and celebrations."
                path="/private-events"
            />
            {/* <PageHero
                eyebrow="Private & corporate"
                title={
                    <>
                        Your event.
                        <br />
                        <i>Elevated.</i>
                    </>
                }
                copy="From team celebrations to brand moments, make it a night your people talk about."
                image={stageImage}
                alt="Private event space at Elevate Bradford"
            /> */}

            <section className="px-5 py-24 lg:px-10 lg:py-32">
                <div className="mx-auto grid max-w-[1100px] gap-14 md:grid-cols-[.75fr_1.25fr]">
                    <div>
                        {/* <SectionTitle
                            eyebrow=""
                            title={
                                <>
                                    Book Uour
                                    <br />
                                    <i>Events.</i>
                                </>
                            }
                        /> */}
                        <p className="text-sm leading-7 text-white/50">
                            Tell us about your event and we’ll come back with tailored options, availability and
                            pricing.
                        </p>
                        <div className="mt-8 grid gap-4 text-sm text-white/60">
                            <div className="border-t border-[#c8a870] pt-3">
                                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]">
                                    Corporate
                                </p>
                                <p className="mt-1">Parties, networking, client entertainment.</p>
                            </div>
                            <div className="border-t border-[#c8a870] pt-3">
                                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]">
                                    Celebrations
                                </p>
                                <p className="mt-1">Birthdays, Christmas parties, milestones.</p>
                            </div>
                            <div className="border-t border-[#c8a870] pt-3">
                                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]">
                                    Brand activations
                                </p>
                                <p className="mt-1">Product launches and brand experiences.</p>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="inline-flex items-center gap-4 bg-[#d8b982] px-6 py-3 text-[10px] font-bold uppercase tracking-[.18em] text-black transition hover:bg-[#f1dbad] disabled:opacity-60"
                    >
                        Book Now
                    </button>

                    {/* <EnquiryForm
                        source="Website – Corporate Enquiry"
                        startEvent="corporate_enquiry_start"
                        successEvent="corporate_enquiry_submit"
                        buttonLabel="Plan your event"
                        successTitle="Your event enquiry is in."
                        successMessage="Thank you for your enquiry. Our team will be in touch shortly to help bring your event to life."
                        fields={[
                            {name: "full_name", label: "Full name", required: true, halfWidth: true},
                            {name: "company", label: "Company name", halfWidth: true},
                            {name: "position", label: "Position", halfWidth: true},
                            {name: "email", label: "Email", type: "email", required: true, halfWidth: true},
                            {name: "phone", label: "Phone", type: "tel", required: true, halfWidth: true},
                            {
                                name: "event_type",
                                label: "Event type",
                                type: "select",
                                required: true,
                                options: [
                                    "Corporate party",
                                    "Team celebration",
                                    "Networking event",
                                    "Brand activation",
                                    "Product launch",
                                    "Private party",
                                    "Birthday",
                                    "Christmas party",
                                    "Other",
                                ],
                            },
                            {
                                name: "guests",
                                label: "Number of guests",
                                type: "number",
                                required: true,
                                halfWidth: true,
                                min: 1,
                                max: 500,
                            },
                            {
                                name: "preferred_date",
                                label: "Preferred date",
                                type: "date",
                                halfWidth: true,
                                minDate: true,
                            },
                            {
                                name: "experience",
                                label: "Preferred experience",
                                type: "select",
                                options: ["Full venue hire", "Semi-private area", "VIP section", "Not sure yet"],
                            },
                            {
                                name: "budget",
                                label: "Budget range",
                                type: "select",
                                options: [
                                    "Under £1,000",
                                    "£1,000 — £3,000",
                                    "£3,000 — £5,000",
                                    "£5,000 — £10,000",
                                    "£10,000+",
                                    "Prefer to discuss",
                                ],
                            },
                            {name: "message", label: "Additional requirements", type: "textarea"},
                        ]}
                    /> */}
                </div>
            </section>
        </>
    );
}
