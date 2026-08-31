import {Link, useLocation} from "react-router-dom";
import {track} from "@/lib/analytics";
import {whatsappUrl} from "@/lib/whatsapp";

export default function MobileBar() {
    const location = useLocation();

    // Hide on form/booking pages to avoid interfering with submission
    const hideOn = ["/vip", "/private-events", "/waitlist", "/contact/general"];
    if (hideOn.some((path) => location.pathname.startsWith(path))) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/15 bg-[#0a0a09]/95 p-2 backdrop-blur lg:hidden">
            <Link
                to="/book"
                onClick={() => track("book_now_click", {location: "mobile_bar"})}
                className="flex-1 bg-[#d8b982] py-2 text-center text-[10px] font-bold uppercase tracking-[.18em] text-black"
            >
                Book now
            </Link>
            <a
                href={whatsappUrl("general")}
                target="_blank"
                rel="noreferrer"
                onClick={() => track("whatsapp_click", {location: "mobile_bar"})}
                className="ml-2 flex-1 border border-white/20 py-2 text-center text-[10px] font-bold uppercase tracking-[.18em]"
            >
                WhatsApp
            </a>
        </div>
    );
}
