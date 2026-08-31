import {Link} from "react-router-dom";
import {ArrowDownRight} from "lucide-react";

type ImageCardProps = {
    image: string;
    title: string;
    copy: string;
    to: string;
    large?: boolean;
    alt?: string;
};

export default function ImageCard({image, title, copy, to, large = false, alt}: ImageCardProps) {
    return (
        <Link
            to={to}
            className={`group relative block min-h-[330px] overflow-hidden ${large ? "md:min-h-[500px]" : ""}`}
        >
            <img
                src={image}
                alt={alt ?? title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#d8b982]">Explore</p>
                <h3 className="display text-2xl">{title}</h3>
                <p className="mt-2 max-w-xs text-sm text-white/70">{copy}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-white">
                    Discover <ArrowDownRight size={15} className="-rotate-90" />
                </span>
            </div>
        </Link>
    );
}
