import { site } from '@/data/site';

type WhatsAppContext =
  | 'general'
  | 'vip'
  | 'private_event'
  | 'podcast_studio'
  | 'music_studio'
  | 'event';

const messages: Record<WhatsAppContext, string> = {
  general: 'Hello Elevate Bradford, I’d like to make an enquiry.',
  vip: 'Hello Elevate Bradford, I’d like to enquire about a VIP booking.',
  private_event: 'Hello Elevate Bradford, I’d like to enquire about hosting a private event.',
  podcast_studio: 'Hello Elevate Bradford, I’d like to enquire about booking the Podcast Studio.',
  music_studio: 'Hello Elevate Bradford, I’d like to enquire about booking the Music Studio.',
  event: 'Hello Elevate Bradford, I’d like to enquire about an upcoming event.',
};

export function whatsappUrl(context: WhatsAppContext = 'general', customMessage?: string): string {
  const message = customMessage ?? messages[context];
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappRaw}?text=${encoded}`;
}

export function telUrl(): string {
  return `tel:${site.phoneRaw}`;
}

export function mailUrl(subject?: string): string {
  const subjectParam = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${site.email}${subjectParam}`;
}
