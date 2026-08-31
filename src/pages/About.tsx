import SEO from "@/components/SEO";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import ImageCard from "@/components/ui/ImageCard";
import {Testimonials} from "@/components/SocialProof";

const crowdImage =
    "https://images.pexels.com/photos/5192316/pexels-photo-5192316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
const musicImage =
    "https://images.pexels.com/photos/122635/pexels-photo-122635.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
const cocktailImage =
    "https://images.pexels.com/photos/10499359/pexels-photo-10499359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
const stageImage =
    "https://images.pexels.com/photos/30518233/pexels-photo-30518233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

export default function About() {
    return (
        <>
            <SEO
                title="About"
                description="Elevate Bradford exists to give the city a place to hear itself think, move, create and connect — a home for music, food, creativity and community."
                path="/about"
            />
            <PageHero
                eyebrow="Our story"
                title={
                    <>
                        More than a venue.
                        <br />
                        <i>It’s a community.</i>
                    </>
                }
                copy="Elevate exists to give Bradford a place to hear itself think, move, create and connect."
                image={crowdImage}
                alt="The Elevate Bradford community"
            />

            <section className="px-5 py-24 lg:px-10 lg:py-36">
                <div className="mx-auto max-w-4xl">
                    <p className="display text-2xl leading-tight md:text-4xl">
                        “The best nights don’t just happen. They become part of who you are.”
                    </p>
                    <p className="mt-10 max-w-md text-sm leading-7 text-white/55">
                        We’re building a home for the city’s energy — a space where music, food, creativity and
                        community meet without needing to explain themselves.
                    </p>
                </div>
            </section>

            <section className="bg-[#111110] px-5 py-24 lg:px-10">
                <div className="mx-auto max-w-[1400px]">
                    <SectionTitle eyebrow="What we believe" title="Three things make Elevate." />
                    <div className="grid gap-3 md:grid-cols-3">
                        <ImageCard
                            image={musicImage}
                            title="Creativity"
                            copy="Space for the next voice, idea and point of view."
                            to="/studios"
                            alt="Creativity at Elevate"
                        />
                        <ImageCard
                            image={cocktailImage}
                            title="Connection"
                            copy="The shared table, the familiar face, the new friend."
                            to="/contact"
                            alt="Connection at Elevate"
                        />
                        <ImageCard
                            image={stageImage}
                            title="Culture"
                            copy="A stage for Bradford and everything it has to say."
                            to="/events"
                            alt="Culture at Elevate"
                        />
                    </div>
                </div>
            </section>

            <Testimonials />
        </>
    );
}
