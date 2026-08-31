import {useState} from "react";
import {useParams, Link, Navigate} from "react-router-dom";
import {ArrowRight, Calendar, Clock, MapPin, Share2, Ticket} from "lucide-react";
import SEO from "@/components/SEO";
import SectionTitle from "@/components/ui/SectionTitle";
import EventCard from "@/components/EventCard";
import {getEventBySlug, getRelatedEvents, type ElevateEvent} from "@/data/events";
import {track} from "@/lib/analytics";

const statusConfig = {
    available: {label: "Buy tickets", class: "bg-[#d8b982] text-black hover:bg-[#f1dbad]", badge: ""},
    limited: {
        label: "Get your tickets",
        class: "bg-[#d8b982] text-black hover:bg-[#f1dbad]",
        badge: "Limited availability",
    },
    sold_out: {
        label: "Sold out",
        class: "border border-red-400/50 text-red-400/80 cursor-not-allowed",
        badge: "Sold out",
    },
    past: {label: "Past event", class: "border border-white/20 text-white/30 cursor-not-allowed", badge: "Past event"},
};

function googleCalendarUrl(event: ElevateEvent): string {
    const start = new Date(event.isoDate);
    const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
    const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const text = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.longDescription);
    const location = encodeURIComponent(`${event.location}, Bradford`);
    const dates = `${fmt(start)}/${fmt(end)}`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&location=${location}&dates=${dates}`;
}

function icsContent(event: ElevateEvent): string {
    const start = new Date(event.isoDate);
    const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
    const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    return [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Elevate Bradford//EN",
        "BEGIN:VEVENT",
        `UID:${event.slug}@elevatebradford.co.uk`,
        `DTSTAMP:${fmt(new Date())}`,
        `DTSTART:${fmt(start)}`,
        `DTEND:${fmt(end)}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.longDescription}`,
        `LOCATION:${event.location}, Bradford`,
        "END:VEVENT",
        "END:VCALENDAR",
    ].join("\r\n");
}

export default function EventDetail() {
    const {slug} = useParams<{slug: string}>();
    const event = slug ? getEventBySlug(slug) : undefined;
    const [shareCopied, setShareCopied] = useState(false);

    if (!event) return <Navigate to="/events" replace />;

    const status = statusConfig[event.status];
    const isSoldOut = event.status === "sold_out";
    const isPast = event.status === "past";
    const related = getRelatedEvents(event.slug, 3);

    const handleShare = async () => {
        const shareUrl = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({title: event.title, url: shareUrl});
                track("share_click", {event: event.title});
            } catch {
                // user cancelled
            }
        } else {
            try {
                await navigator.clipboard.writeText(shareUrl);
                setShareCopied(true);
                track("share_click", {event: event.title});
                setTimeout(() => setShareCopied(false), 2000);
            } catch {
                // clipboard unavailable
            }
        }
    };

    const handleTicketClick = () => {
        track("ticket_click", {event: event.title, status: event.status});
        if (event.ticketUrl) {
            window.open(event.ticketUrl, "_blank", "noreferrer");
        }
    };

    const handleCalendarGoogle = () => {
        track("calendar_add", {event: event.title, type: "google"});
        window.open(googleCalendarUrl(event), "_blank", "noreferrer");
    };

    const handleCalendarIcs = () => {
        track("calendar_add", {event: event.title, type: "ics"});
        const blob = new Blob([icsContent(event)], {type: "text/calendar"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${event.slug}.ics`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Event",
        name: event.title,
        description: event.longDescription,
        startDate: event.isoDate,
        location: {
            "@type": "Place",
            name: "Elevate Bradford",
            address: {"@type": "PostalAddress", addressLocality: event.location},
        },
        image: event.image,
        offers: event.ticketUrl
            ? {
                  "@type": "Offer",
                  price: event.price.replace(/[^\d]/g, "") || "0",
                  priceCurrency: "GBP",
                  url: event.ticketUrl,
                  availability: isSoldOut ? "https://schema.org/SoldOut" : "https://schema.org/InStock",
              }
            : undefined,
    };

    return (
        <>
            <SEO
                title={event.title}
                description={event.description}
                path={`/events/${event.slug}`}
                image={event.image}
                type="article"
                structuredData={structuredData}
            />

            {/* Hero */}
            <section className="relative flex min-h-[70vh] items-end overflow-hidden px-5 pb-20 pt-36 lg:px-10">
                <img
                    src={event.image}
                    alt={`${event.title} at Elevate Bradford`}
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09] via-transparent to-black/30" />
                <div className="relative mx-auto w-full max-w-[1400px]">
                    <span className="mb-5 inline-block bg-[#d8b982] px-3 py-2 text-[9px] font-bold uppercase tracking-[.15em] text-black">
                        {event.category}
                    </span>
                    <h1 className="display max-w-5xl text-3xl leading-[.88] md:text-5xl">{event.title}</h1>
                    {status.badge && (
                        <p
                            className={`mt-4 text-[10px] font-bold uppercase tracking-[.18em] ${
                                isSoldOut ? "text-red-400/80" : "text-[#e8c878]"
                            }`}
                        >
                            {status.badge}
                        </p>
                    )}
                </div>
            </section>

            {/* Details */}
            <section className="px-5 py-24 lg:px-10 lg:py-32">
                <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[1.5fr_1fr]">
                    <div>
                        <SectionTitle eyebrow="About this event" title={event.title} />
                        <p className="max-w-2xl text-sm leading-7 text-white/65">{event.longDescription}</p>

                        {event.gallery && event.gallery.length > 0 && (
                            <div className="mt-10 grid grid-cols-2 gap-3">
                                {event.gallery.map((img) => (
                                    <img
                                        key={img}
                                        src={img}
                                        alt={`${event.title} gallery`}
                                        loading="lazy"
                                        className="aspect-[4/3] object-cover"
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-5">
                        <div className="border border-white/15 p-6">
                            <div className="grid gap-4">
                                <div className="flex items-center gap-3 text-sm text-white/70">
                                    <Calendar size={17} className="text-[#d8b982]" /> {event.date}
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/70">
                                    <Clock size={17} className="text-[#d8b982]" /> {event.time}
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/70">
                                    <MapPin size={17} className="text-[#d8b982]" /> {event.location}, Bradford
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/70">
                                    <Ticket size={17} className="text-[#d8b982]" /> {event.price}
                                </div>
                            </div>

                            {!isPast && (
                                <button
                                    onClick={handleTicketClick}
                                    disabled={isSoldOut}
                                    className={`mt-6 flex w-full items-center justify-center gap-3 px-6 py-3 text-[10px] font-bold uppercase tracking-[.18em] transition ${status.class}`}
                                >
                                    {status.label} <ArrowRight size={15} />
                                </button>
                            )}

                            {!isPast && (
                                <div className="mt-3 grid grid-cols-2 gap-2">
                                    <button
                                        onClick={handleCalendarGoogle}
                                        className="border border-white/15 px-3 py-3 text-[9px] font-bold uppercase tracking-[.12em] text-white/60 transition hover:border-[#d8b982] hover:text-[#d8b982]"
                                    >
                                        Google Calendar
                                    </button>
                                    <button
                                        onClick={handleCalendarIcs}
                                        className="border border-white/15 px-3 py-3 text-[9px] font-bold uppercase tracking-[.12em] text-white/60 transition hover:border-[#d8b982] hover:text-[#d8b982]"
                                    >
                                        Add to calendar
                                    </button>
                                </div>
                            )}

                            <button
                                onClick={handleShare}
                                className="mt-3 flex w-full items-center justify-center gap-2 border border-white/15 px-3 py-3 text-[9px] font-bold uppercase tracking-[.12em] text-white/60 transition hover:border-[#d8b982] hover:text-[#d8b982]"
                            >
                                <Share2 size={13} /> {shareCopied ? "Link copied" : "Share event"}
                            </button>
                        </div>

                        <div className="border border-white/15 p-6">
                            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#c8a870]">
                                Looking for more?
                            </p>
                            <p className="mt-3 text-sm text-white/55">
                                Browse all upcoming events or join the VIP waitlist for early access.
                            </p>
                            <div className="mt-4 flex flex-col gap-2">
                                <Link
                                    to="/events"
                                    className="text-[10px] font-bold uppercase tracking-[.15em] text-[#d8b982]"
                                >
                                    View all events →
                                </Link>
                                <Link
                                    to="/waitlist"
                                    className="text-[10px] font-bold uppercase tracking-[.15em] text-[#d8b982]"
                                >
                                    Join VIP waitlist →
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Related events */}
            {related.length > 0 && (
                <section className="bg-[#111110] px-5 py-24 lg:px-10">
                    <div className="mx-auto max-w-[1400px]">
                        <SectionTitle eyebrow="Keep going" title="More from Elevate" />
                        <div className="grid gap-4 md:grid-cols-3">
                            {related.map((rel) => (
                                <EventCard key={rel.slug} event={rel} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
