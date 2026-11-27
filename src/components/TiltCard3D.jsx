import React, { useRef, useState, useEffect } from 'react';

/**
 * TiltCard3D — Interactive 3D perspective card with pointer-aware tilt and glare.
 * Automatically disables heavy transforms on touch-only devices and reduced-motion preferences.
 */
export default function TiltCard3D({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.02,
  glare = true,
  ...props
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [tiltEnabled, setTiltEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (reduced || coarse) setTiltEnabled(false);
  }, []);

  const handleMouseMove = (e) => {
    if (!tiltEnabled || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlareStyle({ opacity: 0.16, x: glareX, y: glareY });
    }
  };

  const handleMouseEnter = () => {
    if (!tiltEnabled) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tiltEnabled ? transformStyle : undefined,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transformStyle: tiltEnabled ? 'preserve-3d' : undefined,
      }}
      className={`relative preserve-3d will-change-transform ${className}`}
      {...props}
    >
      {children}

      {glare && tiltEnabled && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 overflow-hidden"
          style={{
            opacity: glareStyle.opacity,
            background: `radial-gradient(circle at ${glareStyle.x}% ${glareStyle.y}%, rgba(255, 255, 255, 0.78) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 80%)`,
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </div>
  );
}
