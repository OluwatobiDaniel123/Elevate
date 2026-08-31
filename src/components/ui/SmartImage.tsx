import { useState } from 'react';

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
};

export default function SmartImage({ src, alt, className = '', loading = 'lazy' }: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" fill="%23111110"%3E%3C/svg%3E' : src}
      alt={alt}
      loading={loading}
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
      className={`${className} transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
    />
  );
}
