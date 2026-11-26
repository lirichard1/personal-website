'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          <div className="flex-[0_0_100%] min-w-0 relative aspect-[3/4] bg-gray-100">
            <Image
              src="/richard.jpg"
              alt="Photo of me!"
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover object-top"
            />
          </div>

          <div className="flex-[0_0_100%] min-w-0 relative aspect-[3/4] bg-gray-200 flex items-center justify-center">
            <Image
              src="/deer.jpeg"
              alt="Photo of me!"
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover object-top"
            />
          </div>
          <div className="flex-[0_0_100%] min-w-0 relative aspect-[3/4] bg-gray-300 flex items-center justify-center">
            <Image
              src="/richard3.jpeg"
              alt="Photo of me!"
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
