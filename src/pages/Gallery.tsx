import { useState, useMemo } from 'react';
import SEO from '@/components/SEO';
import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import Lightbox from '@/components/Lightbox';
import { galleryItems, galleryCategories, type GalleryCategory } from '@/data/gallery';

const stageImage = 'https://images.pexels.com/photos/30518233/pexels-photo-30518233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Gallery() {
  const [filter, setFilter] = useState<'All' | GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter),
    [filter]
  );

  const lightboxImages = filtered.map((item) => ({ src: item.src, alt: item.alt, caption: item.caption }));

  return (
    <>
      <SEO
        title="Gallery"
        description="Explore moments from Elevate Bradford — nights, VIP, events, studios, food and community captured in cinematic detail."
        path="/gallery"
      />
      <PageHero
        eyebrow="Gallery"
        title={<>The Elevate<br /><i>moments.</i></>}
        copy="A visual record of the nights, sounds and people that make Elevate what it is."
        image={stageImage}
        alt="Gallery of moments at Elevate Bradford"
      />

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <SectionTitle eyebrow="Browse" title="Find your moment" copy="Filter by category to explore the Elevate experience." />

          <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Gallery filters">
            {galleryCategories.map((item) => (
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

          {filtered.length === 0 ? (
            <div className="border border-white/10 p-12 text-center">
              <p className="display text-3xl text-white/70">No images in this category yet.</p>
              <p className="mt-3 text-sm text-white/45">Check back soon — we’re always adding new moments.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {filtered.map((item, i) => (
                <button
                  key={item.src}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative overflow-hidden"
                  aria-label={`Open ${item.alt} in gallery`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className={`w-full object-cover transition duration-700 group-hover:scale-105 ${i % 4 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}
                  />
                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
                  {item.caption && (
                    <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-[10px] uppercase tracking-[.12em] text-white/80 opacity-0 transition group-hover:opacity-100">
                      {item.caption}
                    </p>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <Lightbox
        images={lightboxImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
