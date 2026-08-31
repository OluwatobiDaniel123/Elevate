import {FormEvent, useState, useCallback, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {ArrowRight, Check, Loader2} from "lucide-react";
import {submitLead} from "@/lib/api";
import {track} from "@/lib/analytics";
import {getAttributionForLead} from "@/lib/attribution";
import {
    validateEmail,
    validatePhone,
    validateRequired,
    validateNumber,
    validateDate,
    type FieldErrors,
} from "@/lib/validation";

export type LeadSource =
    | "Website – VIP Waitlist"
    | "Website – VIP Booking"
    | "Website – Corporate Enquiry"
    | "Website – Studio Booking"
    | "Website – General Enquiry";

export type FieldType = "text" | "email" | "tel" | "date" | "number" | "select" | "textarea";

export type FormField = {
    name: string;
    label: string;
    type?: FieldType;
    required?: boolean;
    options?: string[];
    halfWidth?: boolean;
    minDate?: boolean;
    min?: number;
    max?: number;
    validate?: (value: string) => string | undefined;
};

type EnquiryFormProps = {
    source: LeadSource;
    fields: FormField[];
    buttonLabel: string;
    successTitle: string;
    successMessage: string;
    successEvent: string;
    startEvent: string;
    whatsappContext?: "general" | "vip" | "private_event" | "podcast_studio" | "music_studio";
};

export default function EnquiryForm({
    source,
    fields,
    buttonLabel,
    successTitle,
    successMessage,
    successEvent,
    startEvent,
}: EnquiryFormProps) {
    const navigate = useNavigate();
    const [errors, setErrors] = useState<FieldErrors>({});
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const validateField = useCallback((field: FormField, value: string): string | undefined => {
        if (field.type === "email") return validateEmail(value);
        if (field.type === "tel") return validatePhone(value, field.required ?? false);
        if (field.type === "number") return validateNumber(value, field.label, field.min ?? 1, field.max ?? 500);
        if (field.type === "date" && field.required) {
            const minDate = field.minDate ? new Date(new Date().setHours(0, 0, 0, 0)) : undefined;
            return validateDate(value, field.label, minDate);
        }
        if (field.validate) return field.validate(value);
        if (field.required) return validateRequired(value, field.label);
        return undefined;
    }, []);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (submitting) return;

        setError("");
        const form = new FormData(event.currentTarget);
        const formData = Object.fromEntries(form.entries());

        // Validate all fields
        const newErrors: FieldErrors = {};
        for (const field of fields) {
            const value = String(formData[field.name] ?? "");
            const fieldError = validateField(field, value);
            if (fieldError) newErrors[field.name] = fieldError;
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setSubmitting(true);

        try {
            const attribution = getAttributionForLead();
            const leadData = {
                ...formData,
                source,
                page_url: window.location.pathname,
                ...attribution,
                submitted_at: new Date().toISOString(),
            };

            await submitLead({
                lead_source: source,
                form_data: leadData,
            });

            track(successEvent as never);
            setSubmitted(true);
        } catch {
            setError(
                "We couldn’t send that just yet. Please try again, or WhatsApp the team and we’ll sort it directly."
            );
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        track(startEvent as never);
    }, []);

    if (submitted) {
        return (
            <div className="border border-[#c8a870] p-8 md:p-12" role="status" aria-live="polite">
                <Check className="mb-8 text-[#d8b982]" size={30} />
                <h2 className="display text-4xl leading-tight">{successTitle}</h2>
                <p className="mt-5 text-sm leading-7 text-white/55">{successMessage}</p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-8 text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]"
                >
                    Back to Elevate →
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
            {fields.map((field) => {
                const fieldError = errors[field.name];
                const colSpan = field.halfWidth ? "" : "sm:col-span-2";
                const minDateAttr = field.minDate ? new Date().toISOString().split("T")[0] : undefined;

                return (
                    <div key={field.name} className={colSpan}>
                        <label className="block">
                            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[.18em] text-white/55">
                                {field.label}
                                {field.required ? " *" : ""}
                            </span>

                            {field.type === "textarea" ? (
                                <textarea
                                    name={field.name}
                                    rows={5}
                                    required={field.required}
                                    aria-invalid={!!fieldError}
                                    aria-describedby={fieldError ? `${field.name}-error` : undefined}
                                    className={`w-full resize-none border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#d8b982] ${
                                        fieldError ? "border-red-400/60" : "border-white/15"
                                    }`}
                                />
                            ) : field.type === "select" ? (
                                <select
                                    name={field.name}
                                    required={field.required}
                                    defaultValue=""
                                    aria-invalid={!!fieldError}
                                    className={`w-full border bg-[#0a0a09] px-4 py-3 text-sm outline-none transition focus:border-[#d8b982] ${
                                        fieldError ? "border-red-400/60" : "border-white/15"
                                    }`}
                                >
                                    <option value="" disabled>
                                        Select an option
                                    </option>
                                    {field.options?.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    name={field.name}
                                    type={field.type ?? "text"}
                                    required={field.required}
                                    min={
                                        field.type === "number"
                                            ? field.min ?? 1
                                            : field.type === "date"
                                            ? minDateAttr
                                            : undefined
                                    }
                                    max={field.type === "number" ? field.max ?? 500 : undefined}
                                    aria-invalid={!!fieldError}
                                    aria-describedby={fieldError ? `${field.name}-error` : undefined}
                                    className={`w-full border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#d8b982] ${
                                        fieldError ? "border-red-400/60" : "border-white/15"
                                    }`}
                                />
                            )}
                        </label>
                        {fieldError && (
                            <p id={`${field.name}-error`} role="alert" className="mt-1.5 text-xs text-red-400">
                                {fieldError}
                            </p>
                        )}
                    </div>
                );
            })}

            <div className="sm:col-span-2">
                {error && (
                    <p role="alert" className="mb-4 text-sm text-red-300">
                        {error}
                    </p>
                )}
                <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-4 bg-[#d8b982] px-6 py-3 text-[10px] font-bold uppercase tracking-[.18em] text-black transition hover:bg-[#f1dbad] disabled:opacity-60"
                >
                    {submitting ? (
                        <>
                            <Loader2 size={15} className="animate-spin" /> Sending
                        </>
                    ) : (
                        <>
                            {buttonLabel} <ArrowRight size={15} />
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
