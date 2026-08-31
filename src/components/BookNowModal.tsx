import {useEffect} from "react";
import {Link} from "react-router-dom";
import {ArrowRight, Mic, Music, Sparkles, Ticket, Users, X} from "lucide-react";
import {track} from "@/lib/analytics";

type BookNowModalProps = {
    open: boolean;
    onClose: () => void;
};

const options = [
    {
        icon: Ticket,
        title: "Event Tickets",
        copy: "Buy tickets for upcoming Elevate events.",
        to: "/events",
        event: "book_now_event_tickets",
    },
    {
        icon: Sparkles,
        title: "VIP Experience",
        copy: "Book VIP tables, celebrations and premium experiences.",
        to: "/vip",
        event: "book_now_vip",
    },
    {
        icon: Mic,
        title: "Podcast Studio",
        copy: "Book the professional podcast studio.",
        to: "/studios/podcast",
        event: "book_now_podcast",
    },
    {
        icon: Music,
        title: "Music Studio",
        copy: "Book recording and music production sessions.",
        to: "/studios/music",
        event: "book_now_music",
    },
    {
        icon: Users,
        title: "Private / Corporate Event",
        copy: "Plan a private or corporate experience.",
        to: "/private-events",
        event: "book_now_private",
    },
];

export default function BookNowModal({open, onClose}: BookNowModalProps) {
    useEffect(() => {
        if (!open) return;
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className=" inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-4 md:p-5"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Book now"
        >
            <div
                className=" flex w-full max-w-2xl max-h-[92vh] flex-col overflow-hidden border border-white/15 bg-[#0a0a09]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Sticky Header (does NOT scroll) */}
                <div className="sticky top-0 z-20 border-b border-white/10 bg-[#0a0a09]/95 px-5 py-6 backdrop-blur-md sm:px-6 md:px-10 md:py-8">
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center text-white/60 transition hover:text-white"
                    >
                        <X size={22} />
                    </button>

                    <div className="pr-10">
                        <p className="mb-2 text-[9px] font-bold uppercase tracking-[.22em] text-[#c8a870] sm:mb-3 sm:text-[10px] sm:tracking-[.25em]">
                            Book now
                        </p>

                        <h2 className="display text-[2rem] leading-[1.05] sm:text-4xl md:text-5xl">
                            What would you like
                            <br />
                            <i>to book?</i>
                        </h2>
                    </div>
                </div>

                {/* Scrollable Body */}
                <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-6 md:px-10 md:py-8">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {options.map(({icon: Icon, title, copy, to}) => (
                            <Link
                                key={title}
                                to={to}
                                onClick={() => {
                                    track("book_now_click", {option: title});
                                    onClose();
                                }}
                                className="group flex min-h-[100px] items-start gap-4 border border-white/10 p-3 transition active:bg-white/[0.05] hover:border-[#d8b982] hover:bg-white/[0.03] sm:min-h-0 sm:p-4"
                            >
                                <Icon size={21} className="mt-0.5 shrink-0 text-[#d8b982] sm:size-[22px]" />

                                <div className="min-w-0">
                                    <h3 className="text-xs font-bold uppercase tracking-[.1em] text-white sm:text-sm sm:tracking-[.12em]">
                                        {title}
                                    </h3>

                                    <p className="mt-1.5 text-[11px] leading-5 text-white/50 sm:text-xs">{copy}</p>

                                    <span className="mt-3 inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[.15em] text-[#d8b982]">
                                        Select
                                        <ArrowRight
                                            size={12}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
