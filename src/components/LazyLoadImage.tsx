import React, { CSSProperties, useEffect, useRef, useState } from 'react';

interface LazyLoadImageProps {
  src: string;
  alt: string;
  className: string;
  style?: CSSProperties;
}

function LazyLoadImage({ src, alt, className, style }: LazyLoadImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.unobserve(imageRef.current!);
        }
      });
    });

    observer.observe(imageRef.current!);

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [src]);

  return <img ref={imageRef} src={imageSrc} alt={alt} className={className} style={style}/>;
}

export default LazyLoadImage;
