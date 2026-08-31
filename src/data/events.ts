export type EventCategory =
  | 'Club Nights'
  | 'Live Music'
  | 'Special Events'
  | 'Community'
  | 'Private Events';

export type EventStatus = 'available' | 'limited' | 'sold_out' | 'past';

export type ElevateEvent = {
  slug: string;
  title: string;
  image: string;
  date: string;
  isoDate: string;
  time: string;
  location: string;
  category: EventCategory;
  description: string;
  longDescription: string;
  price: string;
  ticketUrl?: string;
  status: EventStatus;
  featured?: boolean;
  gallery?: string[];
};

export const events: ElevateEvent[] = [
  {
    slug: 'elevate-saturdays',
    title: 'Elevate Saturdays',
    image:
      'https://images.pexels.com/photos/5192316/pexels-photo-5192316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    date: 'Sat 07 Sep',
    isoDate: '2026-09-07T22:00:00',
    time: '22:00 — Late',
    location: 'Bradford',
    category: 'Club Nights',
    description: 'The city’s best sounds, served late.',
    longDescription:
      'Every Saturday, Elevate brings together the best of Bradford’s nightlife. Resident and guest DJs keep the room moving across house, hip hop, R&B and Afrobeats, with premium tables, signature serves and a crowd that knows how to move.',
    price: '£10 — £20',
    ticketUrl: 'https://www.ticketmaster.com',
    status: 'available',
    featured: true,
    gallery: [
      'https://images.pexels.com/photos/5192316/pexels-photo-5192316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/5192299/pexels-photo-5192299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    slug: 'the-culture-edit',
    title: 'The Culture Edit',
    image:
      'https://images.pexels.com/photos/30518233/pexels-photo-30518233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    date: 'Fri 13 Sep',
    isoDate: '2026-09-13T21:00:00',
    time: '21:00 — Late',
    location: 'Bradford',
    category: 'Live Music',
    description: 'Live sets, new voices and a room full of energy.',
    longDescription:
      'A curated night of live performance spotlighting new voices, familiar favourites and the sounds shaping Bradford’s culture. Arrive curious, leave with a new favourite artist.',
    price: '£12',
    ticketUrl: 'https://www.ticketmaster.com',
    status: 'limited',
    featured: true,
  },
  {
    slug: 'house-of-elevate',
    title: 'House of Elevate',
    image:
      'https://images.pexels.com/photos/7715518/pexels-photo-7715518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    date: 'Sat 21 Sep',
    isoDate: '2026-09-21T22:00:00',
    time: '22:00 — Late',
    location: 'Bradford',
    category: 'Special Events',
    description: 'A night of house, disco and unforgettable company.',
    longDescription:
      'House of Elevate is our love letter to the dance floor. Expect deep house, disco cuts and a room designed for the moments you didn’t plan for. Premium tables available.',
    price: '£15 — £25',
    ticketUrl: 'https://www.ticketmaster.com',
    status: 'available',
    featured: true,
  },
  {
    slug: 'community-sessions',
    title: 'Community Sessions',
    image:
      'https://images.pexels.com/photos/11814985/pexels-photo-11814985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    date: 'Sun 29 Sep',
    isoDate: '2026-09-29T18:00:00',
    time: '18:00 — 22:00',
    location: 'Bradford',
    category: 'Community',
    description: 'Open decks, new connections and a room for everyone.',
    longDescription:
      'Community Sessions is our open invitation to the city. Open decks, new connections and a room for everyone. Free entry, good vibes.',
    price: 'Free entry',
    status: 'available',
  },
];

export const eventFilters: ('All' | EventCategory)[] = [
  'All',
  'Club Nights',
  'Live Music',
  'Special Events',
  'Community',
  'Private Events',
];

export function getEventBySlug(slug: string): ElevateEvent | undefined {
  return events.find((event) => event.slug === slug);
}

export function getRelatedEvents(slug: string, count = 3): ElevateEvent[] {
  const current = getEventBySlug(slug);
  if (!current) return events.slice(0, count);
  return events
    .filter((event) => event.slug !== slug && event.status !== 'past')
    .sort((a, b) => {
      const sameCategoryA = a.category === current.category ? 0 : 1;
      const sameCategoryB = b.category === current.category ? 0 : 1;
      return sameCategoryA - sameCategoryB;
    })
    .slice(0, count);
}

export function getFeaturedEvents(count = 3): ElevateEvent[] {
  const featured = events.filter((event) => event.featured && event.status !== 'past');
  return (featured.length > 0 ? featured : events).slice(0, count);
}

export function getUpcomingEvents(): ElevateEvent[] {
  return events.filter((event) => event.status !== 'past');
}
