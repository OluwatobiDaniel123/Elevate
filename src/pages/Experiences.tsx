import {Music2, Play, Sparkles} from "lucide-react";
import SEO from "@/components/SEO";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import EventsPreview from "@/components/EventsPreview";
import {getFeaturedEvents} from "@/data/events";

const images = {
    hero: "https://images.pexels.com/photos/7715518/pexels-photo-7715518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    crowd: "https://images.pexels.com/photos/5192316/pexels-photo-5192316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    cocktail:
        "https://images.pexels.com/photos/10499359/pexels-photo-10499359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
};

export default function Experiences() {
    const featuredEvents = getFeaturedEvents(3);

    return (
        <>
            <SEO
                title="The Main Club"
                description="The main club at Elevate Bradford — DJs, live sound, premium tables, food, drinks and a community that knows how to move."
                path="/experiences"
            />
            <PageHero
                eyebrow="Main club"
                title={
                    <>
                        The main
                        <br />
                        <i>club.</i>
                    </>
                }
                copy="The lights go down, the room opens up and Bradford gets a little louder. DJs, live sound, premium tables, food, drinks and a community that knows how to move."
                image={images.hero}
                alt="The main club at Elevate Bradford"
            />

            <section className="px-5 py-24 lg:px-10 lg:py-32">
                <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2">
                    <div>
                        <SectionTitle eyebrow="The experience" title="Come as you are. Leave with a story." />
                        <p className="max-w-md text-sm leading-7 text-white/55">
                            Elevate is made for the full spectrum of a night out. Meet friends on the dance floor,
                            settle into a booth, find a new favourite artist or simply let the music take over.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button to="/events" variant="primary" eventName="cta_click">
                                View events
                            </Button>
                            <Button to="/vip" variant="secondary" eventName="vip_booking_start">
                                Book VIP
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <img
                            src={images.crowd}
                            alt="Crowd at the main club"
                            loading="lazy"
                            className="aspect-[3/4] object-cover"
                        />
                        <img
                            src={images.cocktail}
                            alt="Cocktail at Elevate"
                            loading="lazy"
                            className="mt-10 aspect-[3/4] object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[#111110] px-5 py-24 lg:px-10">
                <div className="mx-auto grid max-w-[1400px] gap-5 md:grid-cols-3">
                    <div className="border-t border-[#c8a870] pt-5">
                        <Music2 className="mb-8 text-[#c8a870]" />
                        <h3 className="display text-2xl">Music</h3>
                        <p className="mt-3 text-sm leading-6 text-white/50">
                            House, hip hop, R&B, Afrobeats and the unexpected.
                        </p>
                    </div>
                    <div className="border-t border-[#c8a870] pt-5">
                        <Play className="mb-8 text-[#c8a870]" />
                        <h3 className="display text-2xl">Atmosphere</h3>
                        <p className="mt-3 text-sm leading-6 text-white/50">
                            Every detail tuned for that just-one-more-song feeling.
                        </p>
                    </div>
                    <div className="border-t border-[#c8a870] pt-5">
                        <Sparkles className="mb-8 text-[#c8a870]" />
                        <h3 className="display text-2xl">VIP</h3>
                        <p className="mt-3 text-sm leading-6 text-white/50">
                            Premium seating, celebrations and your own corner of the night.
                        </p>
                    </div>
                </div>
            </section>

            <EventsPreview events={featuredEvents} />
        </>
    );
}
