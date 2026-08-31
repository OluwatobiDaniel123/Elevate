export type StudioFeature = string;

export type StudioFaq = { question: string; answer: string };

export type Studio = {
  slug: 'podcast' | 'music';
  name: string;
  heroTitle: string;
  heroCopy: string;
  image: string;
  detailImage: string;
  description: string;
  features: StudioFeature[];
  faqs: StudioFaq[];
  bookingType: 'podcast' | 'music';
};

export const studios: Studio[] = [
  {
    slug: 'podcast',
    name: 'Podcast Studio',
    heroTitle: 'Your voice deserves a stage.',
    heroCopy:
      'A considered, professional space for podcasts, interviews, video content and conversations that matter.',
    image:
      'https://images.pexels.com/photos/27375627/pexels-photo-27375627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    detailImage:
      'https://images.pexels.com/photos/3990847/pexels-photo-3990847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'From first take to final export, Elevate gives you the space and support to create without distraction.',
    features: [
      'Broadcast-quality microphones',
      '4K cameras and considered lighting',
      'Multi-track recording and editing',
      'Producer support available',
    ],
    faqs: [
      { question: 'How far ahead should I book?', answer: 'We recommend booking 1–2 weeks ahead for weekend slots, though weekday availability is often more flexible. Send us your preferred dates and we’ll confirm quickly.' },
      { question: 'Can I bring my own engineer?', answer: 'Absolutely. You’re welcome to bring your own engineer, or one of our in-house producers can support your session.' },
      { question: 'What is included in the studio hire?', answer: 'Hire includes the studio space, microphones, cameras, lighting, recording equipment and a dedicated setup. Engineer support can be added on request.' },
    ],
    bookingType: 'podcast',
  },
  {
    slug: 'music',
    name: 'Music Studio',
    heroTitle: 'Turn your sound into something unforgettable.',
    heroCopy:
      'A focused environment for recording, production, vocal sessions, mixing and making something with feeling.',
    image:
      'https://images.pexels.com/photos/122635/pexels-photo-122635.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    detailImage:
      'https://images.pexels.com/photos/122635/pexels-photo-122635.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'From first take to final export, Elevate gives you the space and support to create without distraction.',
    features: [
      'Vocal booth and professional microphones',
      'Production and mixing setup',
      'Creative session hire',
      'Engineer support available',
    ],
    faqs: [
      { question: 'How far ahead should I book?', answer: 'We recommend booking 1–2 weeks ahead for weekend slots, though weekday availability is often more flexible. Send us your preferred dates and we’ll confirm quickly.' },
      { question: 'Can I bring my own engineer?', answer: 'Absolutely. You’re welcome to bring your own engineer, or one of our in-house team can support your session.' },
      { question: 'What is included in the studio hire?', answer: 'Hire includes the studio space, vocal booth, microphones, production setup and recording equipment. Engineer support can be added on request.' },
    ],
    bookingType: 'music',
  },
];

export function getStudioBySlug(slug: string): Studio | undefined {
  return studios.find((studio) => studio.slug === slug);
}
