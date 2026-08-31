import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";
import SEO from "@/components/SEO";

export default function NotFound() {
    return (
        <>
            <SEO title="Page not found" description="We couldn’t find the page you’re looking for." path="/404" />
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-20">
                <img
                    src="https://images.pexels.com/photos/7715518/pexels-photo-7715518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-[#0a0a09]/80" />
                <div className="relative text-center">
                    <p className="mb-5 text-[10px] font-bold uppercase tracking-[.3em] text-[#d8b982]">404</p>
                    <h1 className="display text-3xl leading-[.9] md:text-5xl">
                        Lost in
                        <br />
                        <i>the elevation?</i>
                    </h1>
                    <p className="mx-auto mt-7 max-w-md text-sm text-white/55">
                        We couldn’t find the page you’re looking for.
                    </p>
                    <div className="mt-9 flex flex-wrap justify-center gap-3">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-4 bg-[#d8b982] px-6 py-3 text-[10px] font-bold uppercase tracking-[.18em] text-black transition hover:bg-[#f1dbad]"
                        >
                            Back home <ArrowRight size={15} />
                        </Link>
                        <Link
                            to="/events"
                            className="inline-flex items-center gap-4 border border-white/30 px-6 py-3 text-[10px] font-bold uppercase tracking-[.18em] transition hover:border-[#d8b982] hover:text-[#d8b982]"
                        >
                            Explore events <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
