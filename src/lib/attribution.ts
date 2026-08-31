export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  landingPage?: string;
  capturedAt: string;
};

const STORAGE_KEY = 'elevate_attribution';
const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;

function parseUtm(url: URL): Partial<Attribution> {
  const params = new URLSearchParams(url.search);
  const utm: Partial<Attribution> = {};
  for (const key of UTM_PARAMS) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}

function readStored(): Attribution | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Attribution;
  } catch {
    return null;
  }
}

function writeStored(attr: Attribution) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attr));
  } catch {
    // fail silently
  }
}

export function captureAttribution(): Attribution {
  const existing = readStored();
  if (existing) return existing;

  const url = new URL(window.location.href);
  const utm = parseUtm(url);

  const attribution: Attribution = {
    ...utm,
    referrer: document.referrer || undefined,
    landingPage: window.location.pathname,
    capturedAt: new Date().toISOString(),
  };

  writeStored(attribution);
  return attribution;
}

export function getAttribution(): Attribution | null {
  return readStored();
}

export function getAttributionForLead(): Record<string, string> {
  const attr = getAttribution();
  if (!attr) return {};
  const lead: Record<string, string> = {};
  for (const [key, value] of Object.entries(attr)) {
    if (typeof value === 'string' && value) lead[key] = value;
  }
  return lead;
}
