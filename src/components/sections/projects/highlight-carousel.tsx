'use client';

import { useEffect, useMemo, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import type { CarouselApi } from '@/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { ProjectHighlight } from './types';

interface HighlightCarouselProps {
  categories: ProjectHighlight[];
  autoPlayInterval?: number;
}

export function HighlightCarousel({ categories, autoPlayInterval = 8000 }: HighlightCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const autoplayPlugin = useMemo(
    () =>
      categories.length > 1
        ? Autoplay({
            delay: autoPlayInterval,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          })
        : undefined,
    [categories.length, autoPlayInterval],
  );

  useEffect(() => {
    if (!api) return undefined;

    setCurrent(api.selectedScrollSnap());
    const handleSelect = () => setCurrent(api.selectedScrollSnap());

    api.on('select', handleSelect);
    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  if (categories.length === 0) return null;

  return (
    <div className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={autoplayPlugin ? [autoplayPlugin] : []}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {categories.map((category, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="min-h-[200px] w-full space-y-2 px-6 sm:px-8 md:px-10 lg:px-12">
                <h4 className="text-foreground wrap-break-words text-sm font-semibold">
                  {category.category}
                </h4>
                <ul className="text-muted-foreground space-y-1.5 text-sm">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-1.5">
                      <span className="text-primary shrink-0">•</span>
                      <span className="wrap-break-words min-w-0 flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {categories.length > 1 && (
          <>
            <CarouselPrevious className="bg-card/90 hover:bg-card left-0 -translate-x-1/2 shadow-lg backdrop-blur-sm hover:scale-110 sm:-translate-x-3" />
            <CarouselNext className="bg-card/90 hover:bg-card right-0 translate-x-1/2 shadow-lg backdrop-blur-sm hover:scale-110 sm:translate-x-3" />
          </>
        )}
      </Carousel>

      {/* Dots Indicator */}
      {categories.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {categories.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2'
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
