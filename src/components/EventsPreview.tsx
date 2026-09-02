import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";
import type {ElevateEvent} from "@/data/events";
import EventCard from "@/components/EventCard";
import SectionTitle from "@/components/ui/SectionTitle";

type EventsPreviewProps = {
    events: ElevateEvent[];
};

export default function EventsPreview({events}: EventsPreviewProps) {
    if (events.length === 0) {
        return (
            <section className="px-5 py-24 lg:px-10 lg:py-32">
                <div className="mx-auto max-w-[1400px]">
                    <SectionTitle eyebrow="What’s happening" title="Make a date with Elevate" />
                    <div className="border border-white/10 p-12 text-center">
                        <p className="display text-2xl text-white/70">Nothing on the calendar just yet.</p>
                        <p className="mt-3 text-sm text-white/45">Check back soon for the next Elevate experience.</p>
                        <Link
                            to="/waitlist"
                            className="mt-6 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]"
                        >
                            Join the VIP waitlist <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="px-5 py-24 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-[1400px]">
                <SectionTitle
                    eyebrow=""
                    title="Make a date with Elevate"
                    copy="Everyday at Elevate has its own vibe,the whole week packed to keep you entertained."
                />
                <div className="grid gap-4 md:grid-cols-3">
                    {events.map((event) => (
                        <EventCard key={event.slug} event={event} />
                    ))}
                </div>
                <Link
                    to="/events"
                    className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]"
                >
                    View all events <ArrowRight size={15} />
                </Link>
            </div>
        </section>
    );
}
