type PageHeroProps = {
    eyebrow: string;
    title: React.ReactNode;
    copy: string;
    image: string;
    alt?: string;
};

export default function PageHero({eyebrow, title, copy, image, alt = ""}: PageHeroProps) {
    return (
        <section className="relative flex min-h-[70vh] items-end overflow-hidden px-5 pb-20 pt-36 lg:px-10">
            <img src={image} alt={alt} loading="eager" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09] via-transparent to-black/30" />
            <div className="relative mx-auto w-full max-w-[1400px]">
                <p className="mb-6 text-[10px] font-bold uppercase tracking-[.3em] text-[#d8b982]">{eyebrow}</p>
                <h1 className="display max-w-5xl text-4xl leading-[.88] md:text-6xl">{title}</h1>
                <p className="mt-7 max-w-lg text-sm leading-7 text-white/65">{copy}</p>
            </div>
        </section>
    );
}
