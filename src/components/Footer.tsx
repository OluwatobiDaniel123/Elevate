import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Music2 } from 'lucide-react';
import { site, socialLinks } from '@/data/site';
import { track } from '@/lib/analytics';

const navLinks = [
  ['/', 'Home'],
  ['/experiences', 'Experiences'],
  ['/events', 'Events'],
  ['/studios', 'Studios'],
  ['/private-events', 'Private Events'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
];

const bookingLinks = [
  ['/events', 'Buy Tickets'],
  ['/vip', 'Book VIP'],
  ['/studios', 'Book Studio'],
  ['/private-events', 'Plan Your Event'],
];

const legalLinks = [
  ['/legal/privacy', 'Privacy Policy'],
  ['/legal/cookies', 'Cookie Policy'],
  ['/legal/terms', 'Terms & Conditions'],
];

function SocialIcon({ label }: { label: string }) {
  if (label === 'Instagram') return <Instagram size={18} />;
  if (label === 'LinkedIn') return <Linkedin size={18} />;
  if (label === 'TikTok') return <Music2 size={18} />;
  return null;
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a09] px-5 py-16 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center border border-[#c8a870] text-[#c8a870]">
                <span className="display text-xl">E</span>
              </span>
              <span className="text-xs font-semibold tracking-[.25em]">ELEVATE BRADFORD</span>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/50">
              A destination for nightlife, music, creativity, culture and the people who make Bradford move.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-[#d8b982]">Explore</p>
            <div className="grid gap-3 text-sm text-white/65">
              {navLinks.map(([to, label]) => (
                <Link key={to} to={to}>{label}</Link>
              ))}
            </div>
          </nav>

          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-[#d8b982]">Find us</p>
            <p className="text-sm leading-7 text-white/65">
              {site.city}, {site.region}<br />
              <a href={`mailto:${site.email}`} onClick={() => track('email_click')} className="hover:text-[#d8b982]">{site.email}</a><br />
              <a href={`tel:${site.phoneRaw}`} onClick={() => track('phone_click')} className="hover:text-[#d8b982]">{site.phoneDisplay}</a>
            </p>
            <div className="mt-5 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-white/60 transition hover:text-[#d8b982]"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-3 text-sm text-white/65">
          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#d8b982]">Booking</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {bookingLinks.map(([to, label]) => (
              <Link key={to} to={to} className="hover:text-[#d8b982]">{label}</Link>
            ))}
            <Link to="/waitlist" className="hover:text-[#d8b982]">Join VIP Waitlist</Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[.15em] text-white/35 md:flex-row">
          <span>© 2024 {site.name}</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map(([to, label]) => (
              <Link key={to} to={to} className="hover:text-white/60">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
