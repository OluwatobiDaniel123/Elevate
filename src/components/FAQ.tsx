import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { StudioFaq } from '@/data/studios';

type FAQProps = {
  items: string[] | StudioFaq[];
};

type FaqItem = { question: string; answer: string };

function normalize(items: string[] | StudioFaq[]): FaqItem[] {
  if (items.length === 0) return [];
  if (typeof items[0] === 'string') {
    return (items as string[]).map((q) => ({
      question: q,
      answer: 'We’ll tailor the experience around your project. Send us the details and the team will come back with availability, pricing and next steps.',
    }));
  }
  return items as StudioFaq[];
}

export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = normalize(items);

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={faq.question} className="border-b border-white/15">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between py-5 text-left text-sm text-white/80"
          >
            {faq.question}
            <ChevronDown
              size={17}
              className={`shrink-0 transition ${open === i ? 'rotate-180 text-[#d8b982]' : 'text-white/40'}`}
            />
          </button>
          {open === i && (
            <p className="pb-5 text-sm leading-6 text-white/50">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
