import SEO from '@/components/SEO';
import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import EnquiryForm from '@/components/EnquiryForm';

const crowdImage = 'https://images.pexels.com/photos/5192316/pexels-photo-5192316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Waitlist() {
  return (
    <>
      <SEO
        title="VIP Waitlist"
        description="Join the Elevate Bradford VIP waitlist for exclusive access to launch updates, events, experiences and announcements before everyone else."
        path="/waitlist"
      />
      <PageHero
        eyebrow="VIP waitlist"
        title={<>Be the first<br /><i>to know.</i></>}
        copy="Join the Elevate VIP waitlist for exclusive access to launch updates, events, experiences and important announcements before everyone else."
        image={crowdImage}
        alt="VIP waitlist at Elevate Bradford"
      />

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1100px] gap-14 md:grid-cols-[.75fr_1.25fr]">
          <div>
            <SectionTitle eyebrow="Join the list" title={<>You’re<br /><i>one step away.</i></>} />
            <p className="text-sm leading-7 text-white/50">Be the first to hear about new events, exclusive experiences and important announcements.</p>
          </div>

          <EnquiryForm
            source="Website – VIP Waitlist"
            startEvent="waitlist_start"
            successEvent="waitlist_signup"
            buttonLabel="Join the waitlist"
            successTitle="You’re on the list."
            successMessage="Welcome to Elevate. We’ll keep you first to know."
            fields={[
              { name: 'first_name', label: 'First name', required: true, halfWidth: true },
              { name: 'last_name', label: 'Last name', required: true, halfWidth: true },
              { name: 'birthday', label: 'Birthday', type: 'date', halfWidth: true },
              { name: 'email', label: 'Email', type: 'email', required: true, halfWidth: true },
              { name: 'location', label: 'Location', halfWidth: true },
              { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', halfWidth: true },
            ]}
          />
        </div>
      </section>
    </>
  );
}
