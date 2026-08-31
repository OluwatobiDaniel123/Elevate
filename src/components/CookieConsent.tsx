import { useState, useEffect } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { setConsent, flushQueue, type ConsentState } from '@/lib/analytics';

const STORAGE_KEY = 'elevate_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) setVisible(true);
  }, []);

  const accept = (consent: ConsentState) => {
    setConsent(consent);
    setVisible(false);
    if (consent.analytics) flushQueue();
  };

  const acceptAll = () => accept({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => accept({ necessary: true, analytics: false, marketing: false });
  const saveSettings = () => accept({ necessary: true, analytics, marketing });

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/15 bg-[#0a0a09]/98 backdrop-blur-xl lg:bottom-0">
      <div className="mx-auto max-w-[1400px] px-5 py-6 lg:px-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm text-white/80">
              We use cookies to enhance your experience and analyse traffic. You can choose which categories to allow.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="border border-white/20 px-5 py-3 text-[10px] font-bold uppercase tracking-[.15em] text-white/70 transition hover:border-[#d8b982] hover:text-[#d8b982]"
            >
              Preferences <ChevronDown size={13} className={`inline transition ${showSettings ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={rejectAll}
              className="border border-white/20 px-5 py-3 text-[10px] font-bold uppercase tracking-[.15em] text-white/70 transition hover:border-white/40 hover:text-white"
            >
              Necessary only
            </button>
            <button
              onClick={acceptAll}
              className="bg-[#d8b982] px-5 py-3 text-[10px] font-bold uppercase tracking-[.15em] text-black transition hover:bg-[#f1dbad]"
            >
              Accept all
            </button>
          </div>
        </div>

        {showSettings && (
          <div className="mt-5 grid gap-4 border-t border-white/10 pt-5 md:grid-cols-2">
            <label className="flex items-start gap-3">
              <input type="checkbox" checked disabled className="mt-1 accent-[#d8b982]" readOnly />
              <div>
                <p className="text-xs font-bold uppercase tracking-[.12em] text-white">Necessary</p>
                <p className="mt-1 text-xs text-white/45">Required for the site to function. Always on.</p>
              </div>
            </label>
            <label className="flex items-start gap-3">
              <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="mt-1 accent-[#d8b982]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[.12em] text-white">Analytics</p>
                <p className="mt-1 text-xs text-white/45">Help us understand how visitors use the site.</p>
              </div>
            </label>
            <label className="flex items-start gap-3">
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-1 accent-[#d8b982]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[.12em] text-white">Marketing</p>
                <p className="mt-1 text-xs text-white/45">Used to measure ad campaign effectiveness.</p>
              </div>
            </label>
            <div className="flex items-end">
              <button
                onClick={saveSettings}
                className="inline-flex items-center gap-2 bg-[#d8b982] px-5 py-3 text-[10px] font-bold uppercase tracking-[.15em] text-black transition hover:bg-[#f1dbad]"
              >
                <Check size={14} /> Save preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
