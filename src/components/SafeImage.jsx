import React, { useState } from 'react';

const FALLBACK_ARCH_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80';

/**
 * SafeImage — Progressive luxury architectural photography loader with shimmer & fallback.
 */
export default function SafeImage({
  src,
  alt,
  className = '',
  fallbackSrc = FALLBACK_ARCH_IMAGE,
  loading = 'lazy',
  ...props
}) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);
  const [loaded, setLoaded] = useState(false);

  React.useEffect(() => {
    setCurrentSrc(src || fallbackSrc);
    setLoaded(false);
  }, [src, fallbackSrc]);

  return (
    <img
      src={currentSrc}
      alt={alt || 'Pristine Decore Architectural Project'}
      className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-90'}`}
      loading={loading}
      onLoad={() => setLoaded(true)}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
        setLoaded(true);
      }}
      {...props}
    />
  );
}
