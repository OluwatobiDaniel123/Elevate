export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export type Stat = {
  label: string;
  value: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: 'The best night out Bradford has had in years. The sound, the room, the energy — everything felt considered.',
    name: 'Placeholder testimonial',
    context: 'Guest',
  },
  {
    quote: 'We booked the podcast studio for a series and the quality was night and day. Professional from start to finish.',
    name: 'Placeholder testimonial',
    context: 'Podcast host',
  },
  {
    quote: 'Hosted our company party at Elevate and the team made it effortless. Our people are still talking about it.',
    name: 'Placeholder testimonial',
    context: 'Corporate client',
  },
];

export const stats: Stat[] = [
  { label: 'Events hosted', value: '—' },
  { label: 'Guests welcomed', value: '—' },
  { label: 'Artists featured', value: '—' },
  { label: 'Community members', value: '—' },
];
