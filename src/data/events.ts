export type EventCategory = "Club Nights" | "Live Music" | "Special Events" | "Community" | "Private Events";

export type EventStatus = "available" | "limited" | "sold_out" | "past";

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

// export const events: ElevateEvent[] = [
//     {
//         slug: "elevate-monday",
//         title: "Elevate Monday ",
//         image: "https://images.pexels.com/photos/5192316/pexels-photo-5192316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//         date: "Sat 07 Sep",
//         isoDate: "2026-09-07T22:00:00",
//         time: "22:00 — Late",
//         location: "Bradford",
//         category: "Club Nights",
//         description: "Elevate House Afrobeats & Amapiano, DJs, MCs, entertainment and special guests.",
//         longDescription: "Elevate House Afrobeats & Amapiano, DJs, MCs, entertainment and special guests.",
//         price: "£10 — £20",
//         ticketUrl: "https://www.ticketmaster.com",
//         status: "available",
//         featured: true,
//         gallery: [
//             "https://images.pexels.com/photos/5192316/pexels-photo-5192316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//             "https://images.pexels.com/photos/5192299/pexels-photo-5192299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//         ],
//     },
//     {
//         slug: "the-culture-edit",
//         title: "The Culture Edit",
//         image: "https://images.pexels.com/photos/30518233/pexels-photo-30518233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//         date: "Fri 13 Sep",
//         isoDate: "2026-09-13T21:00:00",
//         time: "21:00 — Late",
//         location: "Bradford",
//         category: "Live Music",
//         description: "Live sets, new voices and a room full of energy.",
//         longDescription:
//             "A curated night of live performance spotlighting new voices, familiar favourites and the sounds shaping Bradford’s culture. Arrive curious, leave with a new favourite artist.",
//         price: "£12",
//         ticketUrl: "https://www.ticketmaster.com",
//         status: "limited",
//         featured: true,
//     },
//     {
//         slug: "house-of-elevate",
//         title: "House of Elevate",
//         image: "https://images.pexels.com/photos/7715518/pexels-photo-7715518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//         date: "Sat 21 Sep",
//         isoDate: "2026-09-21T22:00:00",
//         time: "22:00 — Late",
//         location: "Bradford",
//         category: "Special Events",
//         description: "A night of house, disco and unforgettable company.",
//         longDescription:
//             "House of Elevate is our love letter to the dance floor. Expect deep house, disco cuts and a room designed for the moments you didn’t plan for. Premium tables available.",
//         price: "£15 — £25",
//         ticketUrl: "https://www.ticketmaster.com",
//         status: "available",
//         featured: true,
//     },
//     {
//         slug: "community-sessions",
//         title: "Community Sessions",
//         image: "https://images.pexels.com/photos/11814985/pexels-photo-11814985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//         date: "Sun 29 Sep",
//         isoDate: "2026-09-29T18:00:00",
//         time: "18:00 — 22:00",
//         location: "Bradford",
//         category: "Community",
//         description: "Open decks, new connections and a room for everyone.",
//         longDescription:
//             "Community Sessions is our open invitation to the city. Open decks, new connections and a room for everyone. Free entry, good vibes.",
//         price: "Free entry",
//         status: "available",
//     },
// ];

export const events: ElevateEvent[] = [
    {
        slug: "elevate-monday",
        title: "Elevate Monday",
        image: "https://images.pexels.com/photos/5192316/pexels-photo-5192316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        date: "Every Monday",
        isoDate: "2026-09-07T22:00:00",
        time: "22:00 — Late",
        location: "Bradford",
        category: "Club Nights",
        description: "Afrobeats & Amapiano, DJs, MCs, entertainment and special guests.",
        longDescription: "Afrobeats & Amapiano, DJs, MCs, entertainment and special guests.",
        price: "£10 — £20",
        ticketUrl: "https://www.ticketmaster.com",
        status: "available",
        featured: true,
    },

    {
        slug: "elevate-tuesday",
        title: "Elevate Tuesday",
        image: "https://images.pexels.com/photos/30518233/pexels-photo-30518233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        date: "Every Tuesday",
        isoDate: "2026-09-08T20:00:00",
        time: "20:00 — Late",
        location: "Bradford",
        category: "Live Music",
        description: "Weekly karaoke and talent competition.",
        longDescription: "Weekly karaoke and talent competition.",
        price: "Free entry",
        status: "available",
        featured: false,
    },

    {
        slug: "elevate-wednesday",
        title: "Elevate Wednesday",
        image: "https://images.pexels.com/photos/7715518/pexels-photo-7715518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        date: "Every Wednesday",
        isoDate: "2026-09-09T20:00:00",
        time: "20:00 — Late",
        location: "Bradford",
        category: "Live Music",
        description: "Live artists, bands, comedy and open-mic performances.",
        longDescription: "Live artists, bands, comedy and open-mic performances.",
        price: "Free entry",
        status: "available",
        featured: false,
    },

    {
        slug: "elevate-thursday",
        title: "Elevate Thursday",
        image: "https://images.pexels.com/photos/11814985/pexels-photo-11814985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        date: "Every Thursday",
        isoDate: "2026-09-10T21:00:00",
        time: "21:00 — Late",
        location: "Bradford",
        category: "Club Nights",
        description: "R&B, Afrobeats & Amapiano, entertainment, group celebrations and nightlife.",
        longDescription: "R&B, Afrobeats & Amapiano, entertainment, group celebrations and nightlife.",
        price: "£10 — £20",
        ticketUrl: "https://www.ticketmaster.com",
        status: "available",
        featured: true,
    },

    {
        slug: "elevate-friday",
        title: "Elevate Friday",
        image: "https://images.pexels.com/photos/5192299/pexels-photo-5192299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        date: "Every Friday",
        isoDate: "2026-09-11T22:00:00",
        time: "22:00 — Late",
        location: "Bradford",
        category: "Club Nights",
        description:
            "Commercial nightlife, with a strong focus on attendance, tickets, VIP and table bookings, and customer experience.",
        longDescription:
            "Commercial nightlife, with a strong focus on attendance, tickets, VIP and table bookings, and customer experience.",
        price: "£10 — £25",
        ticketUrl: "https://www.ticketmaster.com",
        status: "available",
        featured: true,
    },

    {
        slug: "elevate-saturday",
        title: "Elevate Saturday",
        image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        date: "Every Saturday",
        isoDate: "2026-09-12T22:00:00",
        time: "22:00 — Late",
        location: "Bradford",
        category: "Special Events",
        description: "Flagship weekend nightlife with premium entertainment, DJs, artists and VIP experiences.",
        longDescription: "Flagship weekend nightlife with premium entertainment, DJs, artists and VIP experiences.",
        price: "£15 — £30",
        ticketUrl: "https://www.ticketmaster.com",
        status: "available",
        featured: true,
    },

    {
        slug: "elevate-sunday",
        title: "Elevate Sunday",
        image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        date: "Every Sunday",
        isoDate: "2026-09-13T15:00:00",
        time: "15:00 — Late",
        location: "Bradford",
        category: "Special Events",
        description: "Day parties, themed events and special entertainment.",
        longDescription: "Day parties, themed events and special entertainment.",
        price: "£10 — £20",
        ticketUrl: "https://www.ticketmaster.com",
        status: "available",
        featured: true,
    },
];
export const eventFilters: ("All" | EventCategory)[] = [
    "All",
    "Club Nights",
    "Live Music",
    "Special Events",
    "Community",
    "Private Events",
];

export function getEventBySlug(slug: string): ElevateEvent | undefined {
    return events.find((event) => event.slug === slug);
}

export function getRelatedEvents(slug: string, count = 3): ElevateEvent[] {
    const current = getEventBySlug(slug);
    if (!current) return events.slice(0, count);
    return events
    .filter((event) => event.slug !== slug && event.status !== "past")
    .sort((a, b) => {
        const sameCategoryA = a.category === current.category ? 0 : 1;
        const sameCategoryB = b.category === current.category ? 0 : 1;
        return sameCategoryA - sameCategoryB;
    })
    .slice(0, count);
}

// export function getFeaturedEvents(count = 3): ElevateEvent[] {
//     const featured = events.filter((event) => event.featured && event.status !== "past");
//     return (featured.length > 0 ? featured : events).slice(0, count);
// }

export function getFeaturedEvents(count = 3): ElevateEvent[] {
    const featuredDays = ["elevate-monday", "elevate-tuesday", "elevate-wednesday"];

    return featuredDays
    .map((slug) => events.find((event) => event.slug === slug))
    .filter((event): event is ElevateEvent => !!event)
    .slice(0, count);
}

export function getUpcomingEvents(): ElevateEvent[] {
    return events.filter((event) => event.status !== "past");
}
