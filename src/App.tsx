import {Suspense, lazy, useEffect} from "react";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import CookieConsent from "@/components/CookieConsent";
import {captureAttribution} from "@/lib/attribution";
import {track} from "@/lib/analytics";

const Home = lazy(() => import("@/pages/Home"));
const Experiences = lazy(() => import("@/pages/Experiences"));
const Events = lazy(() => import("@/pages/Events"));
const EventDetail = lazy(() => import("@/pages/EventDetail"));
const Studios = lazy(() => import("@/pages/Studios"));
const StudioDetail = lazy(() => import("@/pages/StudioDetail"));
const VIP = lazy(() => import("@/pages/VIP"));
const PrivateEvents = lazy(() => import("@/pages/PrivateEvents"));
const Waitlist = lazy(() => import("@/pages/Waitlist"));
const Contact = lazy(() => import("@/pages/Contact"));
const About = lazy(() => import("@/pages/About"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Legal = lazy(() => import("@/pages/Legal"));

function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        track("page_view", {path: pathname});
    }, [pathname]);
    return null;
}

function PageLoader() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#0a0a09] pt-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#d8b982] border-t-transparent" />
        </div>
    );
}

export default function App() {
    useEffect(() => {
        captureAttribution();
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experiences" element={<Experiences />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/events/:slug" element={<EventDetail />} />
                    <Route path="/studios" element={<Studios />} />
                    <Route path="/studios/podcast" element={<StudioDetail podcast />} />
                    <Route path="/studios/music" element={<StudioDetail />} />
                    <Route path="/vip" element={<VIP />} />
                    <Route path="/private-events" element={<PrivateEvents />} />
                    <Route path="/waitlist" element={<Waitlist />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/contact/general" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/legal/:type" element={<Legal />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
            <Footer />
            <MobileBar />
            <CookieConsent />
        </BrowserRouter>
    );
}
