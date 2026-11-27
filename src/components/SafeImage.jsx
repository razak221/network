import React, { useState } from 'react';

const FALLBACK_ARCH_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80';

/**
 * SafeImage — Resilient progressive architectural image with graceful fallback.
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

  // Sync if src prop changes (e.g. tab switch)
  React.useEffect(() => {
    setCurrentSrc(src || fallbackSrc);
  }, [src, fallbackSrc]);

  return (
    <img
      src={currentSrc}
      alt={alt || 'Pristine Decore Architectural Project'}
      className={className}
      loading={loading}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
      {...props}
    />
  );
}
