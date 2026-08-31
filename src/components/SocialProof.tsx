import {testimonials, stats} from "@/data/socialProof";
import SectionTitle from "@/components/ui/SectionTitle";

export function Testimonials() {
    return (
        <section className="bg-[#111110] px-5 py-24 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-[1400px]">
                <SectionTitle eyebrow="Word of mouth" title="What people are saying" center />
                <div className="grid gap-5 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <blockquote key={testimonial.quote} className="border border-white/10 p-6 md:p-8">
                            <p className="display text-sm leading-relaxed text-white/85">“{testimonial.quote}”</p>
                            <footer className="mt-6">
                                <p className="text-sm font-bold text-[#d8b982]">{testimonial.name}</p>
                                <p className="mt-1 text-xs uppercase tracking-[.15em] text-white/40">
                                    {testimonial.context}
                                </p>
                            </footer>
                        </blockquote>
                    ))}
                </div>
                <p className="mt-6 text-center text-[10px] uppercase tracking-[.15em] text-white/30">
                    Placeholder testimonials — replace with verified reviews
                </p>
            </div>
        </section>
    );
}

export function CommunityStats() {
    // Only render if at least one stat has a real value
    const hasRealValues = stats.some((stat) => stat.value !== "—");
    if (!hasRealValues) return null;

    return (
        <section className="px-5 py-20 lg:px-10">
            <div className="mx-auto max-w-[1400px]">
                <div className="grid gap-8 md:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="border-t border-[#c8a870] pt-5">
                            <p className="display text-5xl text-white">{stat.value}</p>
                            <p className="mt-2 text-[10px] font-bold uppercase tracking-[.18em] text-white/45">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
