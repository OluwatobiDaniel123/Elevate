import SEO from '@/components/SEO';
import PageHero from '@/components/ui/PageHero';
import { useParams } from 'react-router-dom';
import { site } from '@/data/site';

type LegalContent = {
  title: string;
  eyebrow: string;
  sections: { heading: string; body: string }[];
};

const legalContent: Record<string, LegalContent> = {
  privacy: {
    title: 'Privacy Policy',
    eyebrow: 'Legal',
    sections: [
      { heading: 'Introduction', body: `${site.name} is committed to protecting your privacy. This policy explains how we collect, use and protect your personal data when you use our website and services.` },
      { heading: 'Data we collect', body: 'We collect information you provide through our forms — including name, email, phone number, and event or booking preferences. We also collect analytics data about how you use our website.' },
      { heading: 'How we use your data', body: 'We use your data to respond to enquiries, process bookings, send updates about events and experiences, and improve our services. We do not sell your data to third parties.' },
      { heading: 'Cookies', body: 'We use cookies to enhance your experience and analyse traffic. You can control your cookie preferences through our cookie consent banner. See our Cookie Policy for more detail.' },
      { heading: 'Your rights', body: 'You have the right to access, correct or delete your personal data. To exercise these rights, contact us using the details on our Contact page.' },
      { heading: 'Contact', body: `If you have any questions about this policy, contact us at ${site.email}.` },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    eyebrow: 'Legal',
    sections: [
      { heading: 'What are cookies', body: 'Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and understand how you use our site.' },
      { heading: 'Types of cookies we use', body: 'Necessary cookies are required for the site to function. Analytics cookies help us understand visitor behaviour. Marketing cookies help us measure campaign effectiveness.' },
      { heading: 'Managing cookies', body: 'You can manage your cookie preferences at any time using our cookie consent banner. You can also clear cookies through your browser settings.' },
      { heading: 'Third-party services', body: 'We may use third-party analytics and marketing services that set their own cookies. These services have their own privacy and cookie policies.' },
      { heading: 'Contact', body: `For questions about our cookie practices, contact ${site.email}.` },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    eyebrow: 'Legal',
    sections: [
      { heading: 'Acceptance of terms', body: `By using this website, you agree to these terms and conditions. If you do not agree, please do not use the site.` },
      { heading: 'Bookings and tickets', body: 'Event tickets and bookings are subject to availability. We reserve the right to cancel or reschedule events. Refund policies will be communicated at the point of purchase.' },
      { heading: 'VIP and private events', body: 'VIP bookings and private event enquiries are subject to availability and separate terms agreed at the time of booking.' },
      { heading: 'Studio bookings', body: 'Studio hire is subject to availability and our studio terms. Full terms will be provided when your booking is confirmed.' },
      { heading: 'Intellectual property', body: 'All content on this website — including text, images and branding — is the property of Elevate Bradford and may not be used without permission.' },
      { heading: 'Liability', body: 'We are not liable for any loss or damage arising from the use of this website, except as required by law.' },
      { heading: 'Contact', body: `For questions about these terms, contact ${site.email}.` },
    ],
  },
};

export default function Legal() {
  const { type } = useParams<{ type: string }>();
  const content = type && legalContent[type] ? legalContent[type] : legalContent.privacy;

  return (
    <>
      <SEO
        title={content.title}
        description={`${content.title} for ${site.name}.`}
        path={`/legal/${type ?? 'privacy'}`}
      />
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        copy="This is placeholder legal text. It should be reviewed and replaced with final, legally approved content before launch."
        image="https://images.pexels.com/photos/27375627/pexels-photo-27375627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt={content.title}
      />

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 border border-[#c8a870]/40 bg-[#c8a870]/5 p-5">
            <p className="text-xs uppercase tracking-[.15em] text-[#d8b982]">Placeholder content</p>
            <p className="mt-2 text-sm text-white/50">This legal text is a placeholder. It must be reviewed and replaced with final, legally approved copy before the website goes live.</p>
          </div>

          <div className="grid gap-10">
            {content.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="display text-2xl text-white">{section.heading}</h2>
                <p className="mt-3 text-sm leading-7 text-white/55">{section.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-xs text-white/35">Last updated: August 2024 · {site.name}</p>
        </div>
      </section>
    </>
  );
}
