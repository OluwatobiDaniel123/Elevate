type SectionTitleProps = {
    eyebrow: string;
    title: React.ReactNode;
    copy?: string;
    center?: boolean;
};

export default function SectionTitle({eyebrow, title, copy, center = false}: SectionTitleProps) {
    return (
        <div
            className={`mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end ${
                center ? "md:flex-col md:items-center text-center" : ""
            }`}
        >
            <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[.25em] text-[#c8a870]">{eyebrow}</p>
                <h2 className="display max-w-2xl text-2xl leading-[.95] text-white md:text-3xl">{title}</h2>
            </div>
            {copy && <p className="max-w-xs text-sm leading-6 text-white/50">{copy}</p>}
        </div>
    );
}
