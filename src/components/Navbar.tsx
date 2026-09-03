import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {Menu, X} from "lucide-react";
import {track} from "@/lib/analytics";
import BookNowModal from "@/components/BookNowModal";
import logo from "../asessts/logo_3.jpeg";

const links: [string, string][] = [
    ["/", "Home"],
    // ["/experiences", "Experiences"],
    ["/events", "Events"],
    ["/studios", "Studios"],
    ["/private-events", "Private Events"],
    // ["/about", "About"],
    ["/contact", "Contact"],
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [bookOpen, setBookOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 lg:px-10">
                <Link to="/" onClick={() => setOpen(false)} className="group flex items-center gap-3">
                    <img src={logo} alt="logo" className="w-28 max-[768px]:w-72 h-12" />
                </Link>

                <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
                    {links.map(([to, label]) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({isActive}) =>
                                `text-[10px] font-semibold uppercase tracking-[.18em] transition hover:text-[#d8b982] ${
                                    isActive ? "text-[#d8b982]" : "text-white/75"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden items-center gap-5 lg:flex">
                    <Link
                        to="/waitlist"
                        className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#d8b982]"
                    >
                        VIP Waitlist
                    </Link>
                    <button
                        onClick={() => {
                            track("book_now_click");
                            setBookOpen(true);
                        }}
                        className="border border-[#d8b982] px-5 py-3 text-[10px] font-bold uppercase tracking-[.18em] transition hover:bg-[#d8b982] hover:text-black"
                    >
                        Book now
                    </button>
                </div>

                <button
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => {
                        setOpen(!open);
                        track(open ? "menu_close" : "menu_open");
                    }}
                    className="text-white lg:hidden"
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {open && (
                <div className="border-t border-white/10 bg-[#0a0a09] px-5 py-7 lg:hidden">
                    <nav className="grid gap-5" aria-label="Mobile navigation">
                        {links.map(([to, label]) => (
                            <NavLink
                                onClick={() => setOpen(false)}
                                key={to}
                                to={to}
                                className="text-sm font-semibold uppercase tracking-[.18em] text-white/80"
                            >
                                {label}
                            </NavLink>
                        ))}
                        {/* <Link
                            onClick={() => setOpen(false)}
                            to="/waitlist"
                            className="text-sm font-semibold uppercase tracking-[.18em] text-[#d8b982]"
                        >
                            VIP Waitlist
                        </Link> */}
                        <button
                            onClick={() => {
                                setOpen(false);
                                track("book_now_click");
                                setBookOpen(true);
                            }}
                            className="mt-2 bg-[#d8b982] px-5 py-3 text-center text-xs font-bold uppercase tracking-[.18em] text-black"
                        >
                            Book now
                        </button>
                    </nav>
                </div>
            )}

            <BookNowModal open={bookOpen} onClose={() => setBookOpen(false)} />
        </header>
    );
}
