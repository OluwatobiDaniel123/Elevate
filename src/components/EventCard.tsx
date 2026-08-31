import {Link} from "react-router-dom";
import type {ElevateEvent} from "@/data/events";
import {track} from "@/lib/analytics";

const statusConfig = {
    available: {label: "Buy tickets", class: "text-[#d8b982]"},
    limited: {label: "Get your tickets", class: "text-[#e8c878]"},
    sold_out: {label: "Sold out", class: "text-red-400/80"},
    past: {label: "Past event", class: "text-white/30"},
};

export default function EventCard({event}: {event: ElevateEvent}) {
    const status = statusConfig[event.status];
    const isSoldOut = event.status === "sold_out";
    const isPast = event.status === "past";

    return (
        <Link
            to={`/events/${event.slug}`}
            onClick={() => track("event_view", {title: event.title})}
            className="group block"
            aria-label={`${event.title} on ${event.date}`}
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={event.image}
                    alt={`${event.title} at Elevate Bradford`}
                    loading="lazy"
                    className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${
                        isPast ? "grayscale" : ""
                    }`}
                />
                <span className="absolute left-4 top-4 bg-[#d8b982] px-3 py-2 text-[9px] font-bold uppercase tracking-[.15em] text-black">
                    {event.category}
                </span>
                {event.status === "limited" && (
                    <span className="absolute right-4 top-4 border border-[#e8c878] bg-black/70 px-3 py-2 text-[9px] font-bold uppercase tracking-[.15em] text-[#e8c878]">
                        Limited
                    </span>
                )}
                {isSoldOut && (
                    <span className="absolute right-4 top-4 border border-red-400/60 bg-black/70 px-3 py-2 text-[9px] font-bold uppercase tracking-[.15em] text-red-400/80">
                        Sold out
                    </span>
                )}
            </div>
            <div className="border-b border-white/15 py-5">
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#c8a870]">{event.date}</p>
                <h3 className="display mt-2 text-xl">{event.title}</h3>
                <p className="mt-2 text-xs text-white/50">
                    {event.time} · {event.location}
                </p>
                <p className="mt-3 text-sm text-white/65">{event.description}</p>
                <p className="mt-4 text-sm text-white/65">
                    {event.price}
                    <span className={`float-right ${status.class}`}>{status.label} →</span>
                </p>
            </div>
        </Link>
    );
}
