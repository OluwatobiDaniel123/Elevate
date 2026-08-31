export type SiteConfig = {
    name: string;
    tagline: string;
    city: string;
    region: string;
    email: string;
    phoneDisplay: string;
    phoneRaw: string;
    whatsappRaw: string;
    instagram: string;
    instagramUrl: string;
    tiktok: string;
    tiktokUrl: string;
    linkedin: string;
    linkedinUrl: string;
    mapsQuery: string;
    mapsUrl: string;
    openingHours: {days: string; hours: string}[];
};

export const site: SiteConfig = {
    name: "Elevate Bradford",
    tagline: "More than a venue. It’s a community.",
    city: "42–44 Westgate,",
    region: "Bradford, BD1 2QR, United Kingdom",
    email: "elevatebdmedia@gmail.com",
    phoneDisplay: "+44 (0) 1274 000 000",
    phoneRaw: "+441274000000",
    whatsappRaw: "441274000000",
    instagram: "@elevatebradford",
    instagramUrl: "https://instagram.com/elevatebradford",
    tiktok: "@elevatebradford",
    tiktokUrl: "https://tiktok.com/@elevatebradford",
    linkedin: "Elevate Bradford",
    linkedinUrl: "https://linkedin.com/company/elevate-bradford",
    mapsQuery: "Bradford, West Yorkshire",
    mapsUrl: "https://www.google.com/maps/search/Bradford+West+Yorkshire",
    openingHours: [
        {days: "Thursday", hours: "9pm — late"},
        {days: "Friday", hours: "9pm — late"},
        {days: "Saturday", hours: "9pm — late"},
    ],
};

export type SocialLinks = {
    label: string;
    href: string;
    handle: string;
};

export const socialLinks: SocialLinks[] = [
    {label: "Instagram", href: site.instagramUrl, handle: site.instagram},
    {label: "TikTok", href: site.tiktokUrl, handle: site.tiktok},
    {label: "LinkedIn", href: site.linkedinUrl, handle: site.linkedin},
];
