import {Link} from "react-router-dom";
import {ArrowRight, Instagram, Linkedin, Mail, MapPin, Music2, Phone} from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import EnquiryForm from "@/components/EnquiryForm";
import {site, socialLinks} from "@/data/site";
import {track} from "@/lib/analytics";
import {whatsappUrl, telUrl, mailUrl} from "@/lib/whatsapp";

const cocktailImage =
    "https://images.pexels.com/photos/10499359/pexels-photo-10499359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

function SocialIcon({label}: {label: string}) {
    if (label === "Instagram") return <Instagram size={18} />;
    if (label === "LinkedIn") return <Linkedin size={18} />;
    if (label === "TikTok") return <Music2 size={18} />;
    return null;
}

export default function Contact() {
    return (
        <>
            <SEO
                title="Contact"
                description="Get in touch with Elevate Bradford — WhatsApp, phone, email, location and directions. We’re listening."
                path="/contact"
            />
            <PageHero
                eyebrow="Come find us"
                title={
                    <>
                        Let’s make
                        <br />
                        <i>something happen.</i>
                    </>
                }
                copy="Questions, bookings, big ideas or just want to say hello? We’re listening."
                image={cocktailImage}
                alt="Contact Elevate Bradford"
            />

            <section className="px-5 py-24 lg:px-10 lg:py-32">
                <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-2">
                    <div>
                        <SectionTitle eyebrow="Visit Elevate" title="Your next experience starts here." />

                        <div className="grid gap-7 text-sm text-white/65">
                            <div>
                                <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]">
                                    <MapPin size={14} /> Location
                                </p>
                                {site.city}, {site.region}
                            </div>
                            <div>
                                <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]">
                                    <Mail size={14} /> Email
                                </p>
                                <a
                                    href={mailUrl()}
                                    onClick={() => track("email_click")}
                                    className="hover:text-[#d8b982]"
                                >
                                    {site.email}
                                </a>
                            </div>
                            <div>
                                <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]">
                                    <Phone size={14} /> Phone
                                </p>
                                <a
                                    href={telUrl()}
                                    onClick={() => track("phone_click")}
                                    className="hover:text-[#d8b982]"
                                >
                                    {site.phoneDisplay}
                                </a>
                            </div>
                            <div>
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]">
                                    WhatsApp
                                </p>
                                <a
                                    href={whatsappUrl("general")}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => track("whatsapp_click", {location: "contact"})}
                                    className="hover:text-[#d8b982]"
                                >
                                    Message us on WhatsApp
                                </a>
                            </div>
                            <div>
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]">
                                    Opening hours
                                </p>
                                <div className="grid gap-1">
                                    {site.openingHours.map((entry) => (
                                        <p key={entry.days}>
                                            {entry.days} · {entry.hours}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]">
                                    Social
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={social.label}
                                            className="text-white/60 transition hover:text-[#d8b982]"
                                        >
                                            <SocialIcon label={social.label} />
                                        </a>
                                        // <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="hover:text-[#d8b982]">{social.label}</a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <a
                            href={site.mapsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]"
                        >
                            Get directions <ArrowRight size={15} />
                        </a>
                    </div>

                    <div>
                        <SectionTitle eyebrow="Quick actions" title="What would you like to do?" />
                        <div className="grid gap-3">
                            <Button to="/vip" variant="primary" eventName="vip_booking_start">
                                Book VIP
                            </Button>
                            <Button to="/private-events" variant="secondary" eventName="corporate_enquiry_start">
                                Plan a private event
                            </Button>
                            <Button to="/studios" variant="secondary" eventName="cta_click">
                                Book a studio
                            </Button>
                            <Link
                                to="/contact/general"
                                className="inline-flex items-center gap-4 px-6 py-4 text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982] transition hover:text-[#f1dbad]"
                            >
                                General enquiry <ArrowRight size={15} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* General enquiry form */}
            <section className="bg-[#111110] px-5 py-24 lg:px-10" id="general-enquiry">
                <div className="mx-auto max-w-[1100px]">
                    <div className="mb-10">
                        <SectionTitle
                            eyebrow="General enquiry"
                            title={
                                <>
                                    Send us
                                    <br />
                                    <i>a message.</i>
                                </>
                            }
                        />
                    </div>
                    <div className="grid gap-14 md:grid-cols-[.75fr_1.25fr]">
                        <div>
                            <p className="text-sm leading-7 text-white/50">
                                Whatever’s on your mind, drop us a message and the team will get back to you.
                            </p>
                        </div>
                        <EnquiryForm
                            source="Website – General Enquiry"
                            startEvent="cta_click"
                            successEvent="general_enquiry_submit"
                            buttonLabel="Send enquiry"
                            successTitle="Thank you. We’ll be in touch."
                            successMessage="Your message is with the team. We’ll get back to you as soon as we can."
                            fields={[
                                {name: "name", label: "Name", required: true, halfWidth: true},
                                {name: "email", label: "Email", type: "email", required: true, halfWidth: true},
                                {name: "phone", label: "Phone", type: "tel", halfWidth: true},
                                {
                                    name: "enquiry_type",
                                    label: "Enquiry type",
                                    type: "select",
                                    required: true,
                                    halfWidth: true,
                                    options: [
                                        "General Enquiry",
                                        "Events",
                                        "VIP",
                                        "Studio",
                                        "Private Events",
                                        "Corporate",
                                        "Other",
                                    ],
                                },
                                {name: "message", label: "Message", type: "textarea"},
                            ]}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
