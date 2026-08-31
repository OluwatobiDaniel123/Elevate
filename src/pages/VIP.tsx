import SEO from '@/components/SEO';
import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import EnquiryForm from '@/components/EnquiryForm';

const heroImage = 'https://images.pexels.com/photos/7715518/pexels-photo-7715518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function VIP() {
  return (
    <>
      <SEO
        title="VIP Experience"
        description="Book VIP tables, premium seating, birthdays, celebrations and exclusive experiences at Elevate Bradford."
        path="/vip"
      />
      <PageHero
        eyebrow="VIP experience"
        title={<>Elevate<br /><i>your night.</i></>}
        copy="Premium tables, birthdays, celebrations and the best seat in the room."
        image={heroImage}
        alt="VIP experience at Elevate Bradford"
      />

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1100px] gap-14 md:grid-cols-[.75fr_1.25fr]">
          <div>
            <SectionTitle eyebrow="Tell us everything" title={<>Make it<br /><i>personal.</i></>} />
            <p className="text-sm leading-7 text-white/50">A few details helps us create the right experience for you. We’ll come back with options and availability.</p>
            <div className="mt-8 grid gap-4 text-sm text-white/60">
              <div className="border-t border-[#c8a870] pt-3">
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]">VIP tables</p>
                <p className="mt-1">Premium seating with dedicated service.</p>
              </div>
              <div className="border-t border-[#c8a870] pt-3">
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]">Celebrations</p>
                <p className="mt-1">Birthdays, milestones and group bookings.</p>
              </div>
              <div className="border-t border-[#c8a870] pt-3">
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#d8b982]">Exclusive experiences</p>
                <p className="mt-1">Tailored packages for unforgettable nights.</p>
              </div>
            </div>
          </div>

          <EnquiryForm
            source="Website – VIP Booking"
            startEvent="vip_booking_start"
            successEvent="vip_booking_submit"
            buttonLabel="Send VIP enquiry"
            successTitle="Your Elevate experience starts here."
            successMessage="Thank you for your enquiry. Our team will be in touch shortly to help plan your night."
            fields={[
              { name: 'first_name', label: 'First name', required: true, halfWidth: true },
              { name: 'last_name', label: 'Last name', required: true, halfWidth: true },
              { name: 'email', label: 'Email', type: 'email', required: true, halfWidth: true },
              { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, halfWidth: true },
              { name: 'preferred_date', label: 'Preferred date', type: 'date', required: true, halfWidth: true, minDate: true },
              { name: 'guests', label: 'Number of guests', type: 'number', required: true, halfWidth: true, min: 1, max: 50 },
              { name: 'occasion', label: 'Occasion', type: 'select', options: ['Birthday', 'Celebration', 'Corporate', 'Date night', 'Group booking', 'Other'] },
              { name: 'experience', label: 'Preferred experience', type: 'select', options: ['VIP table', 'Private booth', 'Premium seating', 'Bottle service', 'Not sure yet'] },
              { name: 'message', label: 'Additional requirements', type: 'textarea' },
            ]}
          />
        </div>
      </section>
    </>
  );
}
