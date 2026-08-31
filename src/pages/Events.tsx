import { useState } from 'react';
import SEO from '@/components/SEO';
import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import EventCard from '@/components/EventCard';
import { events, eventFilters, type EventCategory } from '@/data/events';
import { galleryItems } from '@/data/gallery';
import Lightbox from '@/components/Lightbox';

const stageImage = 'https://images.pexels.com/photos/30518233/pexels-photo-30518233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Events() {
  const [filter, setFilter] = useState<'All' | EventCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const shown = filter === 'All' ? events : events.filter((event) => event.category === filter);
  const momentsGallery = galleryItems.map((item) => ({ src: item.src, alt: item.alt, caption: item.caption }));

  return (
    <>
      <SEO
        title="Events"
        description="Discover upcoming events at Elevate Bradford — club nights, live music, special events and community gatherings."
        path="/events"
      />
      <PageHero
        eyebrow="Mark your calendar"
        title={<>What’s happening<br /><i>at Elevate.</i></>}
        copy="The next big night, the next new sound, the next reason to get everyone together."
        image={stageImage}
        alt="Live performance at Elevate Bradford"
      />

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-wrap gap-2" role="tablist" aria-label="Event filters">
            {eventFilters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                role="tab"
                aria-selected={filter === item}
                className={`px-4 py-3 text-[10px] font-bold uppercase tracking-[.16em] transition ${filter === item ? 'bg-[#d8b982] text-black' : 'border border-white/15 text-white/60 hover:border-[#d8b982]'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {shown.length === 0 ? (
            <div className="border border-white/10 p-12 text-center">
              <p className="display text-3xl text-white/70">Nothing on the calendar just yet.</p>
              <p className="mt-3 text-sm text-white/45">Check back soon for the next Elevate experience.</p>
            </div>
          ) : (
            <div className="grid gap-x-5 gap-y-12 md:grid-cols-3">
              {shown.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* The Elevate Moments */}
      <section className="bg-[#111110] px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionTitle eyebrow="The Elevate moments" title="Remember this." copy="A few frames from the nights that keep us coming back." />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {momentsGallery.map((image, i) => (
              <button
                key={image.src}
                onClick={() => setLightboxIndex(i)}
                className="group relative overflow-hidden"
                aria-label={`Open ${image.alt} in gallery`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={momentsGallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
