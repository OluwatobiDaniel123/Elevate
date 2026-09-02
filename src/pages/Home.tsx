import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";
import SEO from "@/components/SEO";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import ImageCard from "@/components/ui/ImageCard";
import EventsPreview from "@/components/EventsPreview";
import {Testimonials, CommunityStats} from "@/components/SocialProof";
import {getFeaturedEvents} from "@/data/events";
import {site} from "@/data/site";
import {track} from "@/lib/analytics";
import {whatsappUrl} from "@/lib/whatsapp";

const images = {
    hero: "https://images.pexels.com/photos/7715518/pexels-photo-7715518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    crowd: "https://images.pexels.com/photos/5192316/pexels-photo-5192316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    stage: "https://images.pexels.com/photos/30518233/pexels-photo-30518233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    podcast:
        "https://images.pexels.com/photos/27375627/pexels-photo-27375627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    music: "https://images.pexels.com/photos/122635/pexels-photo-122635.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    cocktail:
        "https://images.pexels.com/photos/10499359/pexels-photo-10499359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    food: "https://images.pexels.com/photos/5490999/pexels-photo-5490999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: "Luxury nightlife, music, creativity and culture destination in Bradford.",
    address: {"@type": "PostalAddress", addressLocality: site.city, addressRegion: site.region},
    email: site.email,
    telephone: site.phoneRaw,
    url: "https://elevatebradford.co.uk",
};

export default function Home() {
    const featuredEvents = getFeaturedEvents(3);

    return (
        <>
            <SEO
                title="Nightlife, Music & Culture"
                description="Elevate Bradford is a destination for nightlife, music, creativity, culture and unforgettable experiences in Bradford, West Yorkshire."
                path="/"
                structuredData={structuredData}
            />

            <main>
                {/* Hero */}
                <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-28 pt-32 lg:px-10">
                    <img
                        src={images.hero}
                        alt="DJ performing to a crowd at Elevate Bradford"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/55" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09] via-transparent to-black/30" />
                    <div className="relative mx-auto w-full max-w-[1400px]">
                        <p className="mb-7 text-[10px] font-bold uppercase tracking-[.35em] text-[#d8b982]">
                            Nightlife · Culture · Creativity · Bradford
                        </p>
                        <h1 className="display max-w-4xl text-5xl leading-[.86] md:text-5xl lg:text-[6rem]">
                            Elevate
                            <br />
                            <i className="text-[#d8b982]">Bradford</i>
                        </h1>
                        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="display max-w-lg text-2xl leading-tight md:text-3xl">
                                    More than a venue.
                                    <br />
                                    It’s a community.
                                </p>
                                <p className="mt-4 text-sm text-white/60">
                                    Luxury experiences, live sound and good people.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Button to="/experiences" variant="primary" eventName="book_now_click">
                                    Book your experience
                                </Button>
                                {/* <Button to="/waitlist" variant="secondary" eventName="waitlist_start">
                                    Join VIP waitlist
                                </Button> */}
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-7 left-5 flex items-center gap-3 text-[9px] uppercase tracking-[.2em] text-white/50 lg:left-10">
                        <span className="h-px w-10 bg-[#d8b982]" /> Scroll to explore
                    </div>
                </section>

                {/* What is Elevate */}
                <section className="bg-[#0a0a09] px-5 py-24 lg:px-10 lg:py-36">
                    <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[.8fr_1.2fr] md:items-center">
                        <div>
                            <p className="mb-5 text-[10px] font-bold uppercase tracking-[.25em] text-[#c8a870]">
                                The Elevate edit
                            </p>
                            <h2 className="display text-3xl leading-[.95] md:text-5xl">
                                Where the city
                                <br />
                                <i>comes alive.</i>
                            </h2>
                            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
                                Bradford's home for live music, late-night DJs and premium nightlife — with a recording
                                studio and podcast space built for the city's next generation of talent. Come for the
                                moment. Stay for the feeling.
                            </p>
                            <Link
                                to="/about"
                                className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]"
                            >
                                Our story <ArrowRight size={15} />
                            </Link>
                        </div>
                        <div className="relative">
                            <img
                                src={images.crowd}
                                alt="Friends enjoying a night at Elevate"
                                loading="lazy"
                                className="aspect-[4/3] w-full object-cover"
                            />
                            <div className="absolute -bottom-7 -left-5 hidden border border-[#c8a870] bg-[#0a0a09] p-5 md:block">
                                <p className="display text-3xl">01</p>
                                <p className="mt-1 text-[9px] uppercase tracking-[.18em] text-white/50">
                                    A new kind of night out
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Events preview */}
                <EventsPreview events={featuredEvents} />

                {/* Discover Elevate */}
                {/* <section className="bg-[#111110] px-5 py-24 lg:px-10 lg:py-32">
                    <div className="mx-auto max-w-[1400px]">
                        <SectionTitle
                            eyebrow="Find your frequency"
                            title="Discover Elevate"
                            copy="Four ways to make your night, your sound and your story unforgettable."
                        />
                        <div className="grid gap-3 md:grid-cols-2">
                            <ImageCard
                                image={images.crowd}
                                title="Main club"
                                copy="DJs, dance floors, premium tables and nights that go down in history."
                                to="/experiences"
                                large
                                alt="The main club at Elevate Bradford"
                            />
                            <ImageCard
                                image={images.podcast}
                                title="Podcast studio"
                                copy="Your voice deserves a stage. Record, create and share something real."
                                to="/studios/podcast"
                                alt="Podcast studio at Elevate"
                            />
                            <ImageCard
                                image={images.music}
                                title="Music studio"
                                copy="Turn your sound into something unforgettable."
                                to="/studios/music"
                                alt="Music studio at Elevate"
                            />
                            <ImageCard
                                image={images.stage}
                                title="Private events"
                                copy="Your event. Elevated. Make it a night your people talk about."
                                to="/private-events"
                                alt="Private event space at Elevate"
                            />
                        </div>
                    </div>
                </section> */}

                {/* Main Club feature */}
                {/* <section className="relative overflow-hidden px-5 py-24 lg:px-10 lg:py-36">
                    <img
                        src={images.stage}
                        alt="Live performance at Elevate"
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover opacity-25"
                    />
                    <div className="absolute inset-0 bg-[#0a0a09]/75" />
                    <div className="relative mx-auto max-w-[1400px]">
                        <div className="max-w-2xl">
                            <p className="mb-5 text-[10px] font-bold uppercase tracking-[.25em] text-[#c8a870]">
                                The main club
                            </p>
                            <h2 className="display text-3xl leading-[.95] md:text-5xl">
                                The night
                                <br />
                                <i>belongs to you.</i>
                            </h2>
                            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
                                Big sound. Easy energy. A room designed for the moments you didn’t plan for — and the
                                ones you absolutely did.
                            </p>
                            <Button to="/experiences" variant="primary" eventName="cta_click">
                                Explore the club
                            </Button>
                        </div>
                    </div>
                </section> */}

                {/* Food & Drinks */}
                <section className="bg-[#111110] px-5 py-24 lg:px-10 lg:py-32">
                    <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2 md:items-center">
                        <div>
                            <SectionTitle
                                eyebrow="Eat. Drink. Elevate."
                                title="Good taste is part of the experience."
                                copy="Small plates, signature serves and the kind of drinks that turn one round into a story."
                            />
                            <Button to="/contact" variant="secondary" eventName="cta_click">
                                Make an enquiry
                            </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <img
                                src={images.cocktail}
                                alt="Signature cocktail at Elevate"
                                loading="lazy"
                                className="aspect-[3/4] object-cover"
                            />
                            <img
                                src={images.food}
                                alt="Food served at Elevate"
                                loading="lazy"
                                className="mt-10 aspect-[3/4] object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Community stats */}
                <CommunityStats />

                {/* Testimonials */}
                {/* <Testimonials /> */}

                {/* Community CTA */}
                <section className="px-5 py-24 lg:px-10 lg:py-36">
                    <div className="mx-auto max-w-[1400px] text-center">
                        <p className="mb-5 text-[10px] font-bold uppercase tracking-[.25em] text-[#c8a870]">
                            Find your community
                        </p>
                        <h2 className="display mx-auto max-w-4xl text-3xl leading-[.9] md:text-5xl">
                            More than a night out.
                            <br />
                            <i>It’s where you belong.</i>
                        </h2>
                        <p className="mx-auto mt-7 max-w-md text-sm text-white/55">
                            Connection, friendship, shared experiences and memories that stay with you.
                        </p>
                        <div className="mt-9 flex flex-wrap justify-center gap-3">
                            <Button to="/waitlist" variant="primary" eventName="waitlist_start">
                                Join the Elevate community
                            </Button>
                            <a
                                href={whatsappUrl("general")}
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => track("whatsapp_click", {location: "community"})}
                                className="inline-flex items-center gap-4 border border-white/30 px-6 py-4 text-[10px] font-bold uppercase tracking-[.18em] transition hover:border-[#d8b982] hover:text-[#d8b982]"
                            >
                                WhatsApp us <ArrowRight size={15} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                {/* <section className="px-5 py-24 lg:px-10 lg:py-36">
                    <div className="mx-auto max-w-[1400px] text-center">
                        <p className="mb-5 text-[10px] font-bold uppercase tracking-[.25em] text-[#c8a870]">
                            The next chapter
                        </p>
                        <h2 className="display mx-auto max-w-4xl text-3xl leading-[.9] md:text-5xl">
                            Ready to
                            <br />
                            <i>elevate?</i>
                        </h2>
                        <p className="mx-auto mt-7 max-w-md text-sm text-white/55">Your next experience starts here.</p>
                        <div className="mt-9 flex flex-wrap justify-center gap-3">
                            <Button to="/experiences" variant="primary" eventName="book_now_click">
                                Book your experience
                            </Button>
                            <Button to="/waitlist" variant="secondary" eventName="waitlist_start">
                                Join VIP waitlist
                            </Button>
                        </div>
                    </div>
                </section> */}
            </main>
        </>
    );
}
