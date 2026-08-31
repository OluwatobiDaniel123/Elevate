export type AnalyticsEventName =
  | 'page_view'
  | 'event_view'
  | 'ticket_click'
  | 'vip_booking_start'
  | 'vip_booking_submit'
  | 'podcast_booking_start'
  | 'podcast_booking_submit'
  | 'music_booking_start'
  | 'music_booking_submit'
  | 'corporate_enquiry_start'
  | 'corporate_enquiry_submit'
  | 'waitlist_start'
  | 'waitlist_signup'
  | 'general_enquiry_submit'
  | 'whatsapp_click'
  | 'phone_click'
  | 'email_click'
  | 'book_now_click'
  | 'menu_open'
  | 'menu_close'
  | 'cta_click'
  | 'share_click'
  | 'calendar_add';

type AnalyticsEvent = {
  name: AnalyticsEventName;
  params?: Record<string, string | number | boolean | undefined>;
  timestamp: number;
};

export type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = 'elevate_consent';
const ANALYTICS_KEY = 'elevate_analytics_queue';

function readConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

function readQueue(): AnalyticsEvent[] {
  try {
    const raw = sessionStorage.getItem(ANALYTICS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as AnalyticsEvent[];
  } catch {
    return [];
  }
}

function writeQueue(queue: AnalyticsEvent[]) {
  try {
    sessionStorage.setItem(ANALYTICS_KEY, JSON.stringify(queue));
  } catch {
    // sessionStorage may be unavailable; fail silently
  }
}

export function getConsent(): ConsentState | null {
  return readConsent();
}

export function setConsent(consent: ConsentState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // fail silently
  }
  window.dispatchEvent(new CustomEvent('elevate-consent-change', { detail: consent }));
}

export function hasAnalyticsConsent(): boolean {
  const consent = readConsent();
  return consent?.analytics ?? false;
}

export function track(name: AnalyticsEventName, params?: Record<string, string | number | boolean | undefined>) {
  const event: AnalyticsEvent = { name, params, timestamp: Date.now() };

  // Always dispatch a custom event for internal listeners
  window.dispatchEvent(new CustomEvent('elevate-analytics', { detail: event }));

  // Queue the event regardless; only flush if consent given
  const queue = readQueue();
  queue.push(event);
  writeQueue(queue);

  if (hasAnalyticsConsent()) {
    flushQueue();
  }
}

export function flushQueue() {
  if (!hasAnalyticsConsent()) return;
  const queue = readQueue();
  if (queue.length === 0) return;

  // Integration point: forward to GA4, Meta Pixel, etc.
  // gtag('event', ...) or fbq('trackCustom', ...) would go here.
  // For now, we just clear the queue after dispatching.
  for (const event of queue) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event.name, event.params);
    }
  }
  writeQueue([]);
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
