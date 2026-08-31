import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";
import {track, type AnalyticsEventName} from "@/lib/analytics";

type Variant = "primary" | "secondary" | "tertiary";

type ButtonProps = {
    to: string;
    children: React.ReactNode;
    variant?: Variant;
    eventName?: AnalyticsEventName;
    className?: string;
};

const variantClasses: Record<Variant, string> = {
    primary: "bg-[#d8b982] text-black hover:bg-[#f1dbad]",
    secondary: "border border-white/30 text-white hover:border-[#d8b982] hover:text-[#d8b982]",
    tertiary: "text-[#d8b982] hover:text-[#f1dbad]",
};

export default function Button({to, children, variant = "primary", eventName, className = ""}: ButtonProps) {
    const isExternal = to.startsWith("http") || to.startsWith("mailto:") || to.startsWith("tel:");
    const classes = `group inline-flex items-center gap-4 px-4 py-3 text-[10px] font-bold uppercase tracking-[.18em] transition ${variantClasses[variant]} ${className}`;

    const handleClick = () => {
        track(eventName ?? "cta_click", {label: typeof children === "string" ? children : "cta"});
    };

    if (isExternal) {
        return (
            <a href={to} target="_blank" rel="noreferrer" onClick={handleClick} className={classes}>
                {children}
                <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </a>
        );
    }

    return (
        <Link to={to} onClick={handleClick} className={classes}>
            {children}
            <ArrowRight size={10} className="transition group-hover:translate-x-1" />
        </Link>
    );
}
