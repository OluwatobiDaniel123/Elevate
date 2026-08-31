import { useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type LightboxProps = {
  images: { src: string; alt: string; caption?: string }[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;

  const next = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const prev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, next, prev]);

  if (!isOpen || index === null) return null;
  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-5"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
    >
      <button onClick={onClose} aria-label="Close gallery" className="absolute right-5 top-5 text-white/70 transition hover:text-white">
        <X size={26} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous image"
        className="absolute left-3 text-white/60 transition hover:text-white md:left-8"
      >
        <ChevronLeft size={36} />
      </button>

      <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[80vh] w-full object-contain"
        />
        {current.caption && (
          <figcaption className="mt-4 text-center text-sm text-white/50">{current.caption}</figcaption>
        )}
      </figure>

      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next image"
        className="absolute right-3 text-white/60 transition hover:text-white md:right-8"
      >
        <ChevronRight size={36} />
      </button>

      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[.2em] text-white/40">
        {index + 1} / {images.length}
      </span>
    </div>
  );
}
