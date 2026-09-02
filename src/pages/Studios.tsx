import SEO from "@/components/SEO";
import PageHero from "@/components/ui/PageHero";
import ImageCard from "@/components/ui/ImageCard";
import {studios} from "@/data/studios";

const musicImage =
    "https://images.pexels.com/photos/122635/pexels-photo-122635.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

export default function Studios() {
    return (
        <>
            <SEO
                title="Studios"
                description="Two purpose-built spaces at Elevate Bradford — a professional podcast studio and a fully equipped music studio for recording, production and content creation."
                path="/studios"
            />
            <PageHero
                eyebrow="Create here"
                title={
                    <>
                        Sound is
                        <br />
                        <i>everything.</i>
                    </>
                }
                copy="Two purpose-built spaces for voices, ideas and records that deserve to be heard."
                image={musicImage}
                alt="Music studio at Elevate Bradford"
            />
            <section className="px-5 py-24 lg:px-10 lg:py-32">
                <div className="mx-auto grid max-w-[1400px] gap-3 md:grid-cols-2">
                    {studios.map((studio) => (
                        <ImageCard
                            key={studio.slug}
                            image={studio.image}
                            title={studio.name}
                            copy={studio.heroCopy}
                            to={`/studios/${studio.slug}`}
                            large
                            alt={studio.name}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
