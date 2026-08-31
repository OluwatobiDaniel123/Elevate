import { useParams, Navigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import FAQ from '@/components/FAQ';
import EnquiryForm from '@/components/EnquiryForm';
import { getStudioBySlug, studios } from '@/data/studios';

export default function StudioDetail({ podcast = false }: { podcast?: boolean }) {
  const { slug } = useParams<{ slug: string }>();
  const studio = slug ? getStudioBySlug(slug) : studios.find((s) => (podcast ? s.slug === 'podcast' : s.slug === 'music'));

  if (!studio) return <Navigate to="/studios" replace />;

  return (
    <>
      <SEO
        title={studio.name}
        description={studio.heroCopy}
        path={`/studios/${studio.slug}`}
        image={studio.image}
      />
      <PageHero
        eyebrow={studio.name}
        title={podcast ? <>Your voice<br /><i>deserves a stage.</i></> : <>Turn your sound into<br /><i>something unforgettable.</i></>}
        copy={studio.heroCopy}
        image={studio.image}
        alt={studio.name}
      />

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Make something real" title="Built for the work." />
            <p className="max-w-md text-sm leading-7 text-white/55">{studio.description}</p>
            <ul className="mt-8 grid gap-4 text-sm text-white/70">
              {studio.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check size={16} className="text-[#d8b982]" /> {feature}
                </li>
              ))}
            </ul>
          </div>
          <img src={studio.detailImage} alt={`${studio.name} interior`} loading="lazy" className="aspect-square w-full object-cover" />
        </div>
      </section>

      {/* Booking form */}
      <section className="bg-[#111110] px-5 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1100px] gap-14 md:grid-cols-[.75fr_1.25fr]">
          <div>
            <SectionTitle eyebrow="Book the studio" title={<>Make it<br /><i>happen.</i></>} />
            <p className="text-sm leading-7 text-white/50">Tell us about your project and preferred dates. We’ll come back with availability and next steps.</p>
            <div className="mt-6">
              <Button to="/studios" variant="secondary" eventName="cta_click">Other studios</Button>
            </div>
          </div>
          <EnquiryForm
            source="Website – Studio Booking"
            startEvent={podcast ? 'podcast_booking_start' : 'music_booking_start'}
            successEvent={podcast ? 'podcast_booking_submit' : 'music_booking_submit'}
            buttonLabel={podcast ? 'Book the podcast studio' : 'Book the music studio'}
            successTitle="Your studio booking starts here."
            successMessage="Thank you for your enquiry. Our team will be in touch shortly to confirm availability."
            fields={[
              { name: 'name', label: 'Full name', required: true, halfWidth: true },
              { name: 'email', label: 'Email', type: 'email', required: true, halfWidth: true },
              { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, halfWidth: true },
              { name: 'preferred_date', label: 'Preferred date', type: 'date', required: true, halfWidth: true, minDate: true },
              { name: 'preferred_time', label: 'Preferred time', halfWidth: true },
              { name: 'people', label: 'Number of people', type: 'number', halfWidth: true, min: 1, max: 20 },
              { name: 'session_type', label: 'Session type', type: 'select', required: true, options: podcast ? ['Podcast recording', 'Video podcast', 'Interview', 'Content creation', 'Other'] : ['Recording', 'Music production', 'Vocal recording', 'Mixing', 'Creative session', 'Other'] },
              { name: 'message', label: 'Additional requirements', type: 'textarea' },
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[700px]">
          <SectionTitle eyebrow="Good to know" title="Questions, answered." />
          <FAQ items={studio.faqs} />
        </div>
      </section>
    </>
  );
}
