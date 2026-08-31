export type GalleryCategory =
  | 'Nights'
  | 'VIP'
  | 'Events'
  | 'Studios'
  | 'Food & Drinks'
  | 'Community';

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
};

export const galleryItems: GalleryItem[] = [
  { src: 'https://images.pexels.com/photos/5192316/pexels-photo-5192316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Crowd enjoying a night at Elevate Bradford', category: 'Nights', caption: 'A packed dance floor at Elevate Saturdays' },
  { src: 'https://images.pexels.com/photos/30518233/pexels-photo-30518233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Live performance on stage at Elevate', category: 'Events', caption: 'Live performance at The Culture Edit' },
  { src: 'https://images.pexels.com/photos/10499359/pexels-photo-10499359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Signature cocktail served at Elevate', category: 'Food & Drinks', caption: 'Signature cocktail' },
  { src: 'https://images.pexels.com/photos/7715518/pexels-photo-7715518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'DJ performing to a crowd at Elevate', category: 'Nights', caption: 'DJ set at House of Elevate' },
  { src: 'https://images.pexels.com/photos/5490999/pexels-photo-5490999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Food served at Elevate Bradford', category: 'Food & Drinks', caption: 'Small plates, big flavours' },
  { src: 'https://images.pexels.com/photos/27375627/pexels-photo-27375627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Podcast studio at Elevate', category: 'Studios', caption: 'The podcast studio' },
  { src: 'https://images.pexels.com/photos/122635/pexels-photo-122635.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Artist recording in the music studio', category: 'Studios', caption: 'Session in the music studio' },
  { src: 'https://images.pexels.com/photos/5192299/pexels-photo-5192299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Friends celebrating at Elevate', category: 'VIP', caption: 'VIP celebration' },
  { src: 'https://images.pexels.com/photos/11814985/pexels-photo-11814985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Community gathering at Elevate', category: 'Community', caption: 'Community Sessions' },
  { src: 'https://images.pexels.com/photos/3990847/pexels-photo-3990847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Studio session at Elevate', category: 'Studios', caption: 'Behind the mic' },
  { src: 'https://images.pexels.com/photos/17755354/pexels-photo-17755354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Concert crowd at Elevate', category: 'Events', caption: 'The room comes alive' },
  { src: 'https://images.pexels.com/photos/16736467/pexels-photo-16736467.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cocktail at the bar', category: 'Food & Drinks', caption: 'Bar service' },
];

export const galleryCategories: ('All' | GalleryCategory)[] = [
  'All',
  'Nights',
  'VIP',
  'Events',
  'Studios',
  'Food & Drinks',
  'Community',
];
