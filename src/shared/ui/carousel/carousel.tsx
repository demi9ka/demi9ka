import { Children, type ReactNode, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/shared/ui/lib/utils'

type Props = {
  children: ReactNode
  /** classes applied to the embla viewport (e.g. rounded corners) */
  className?: string
  loop?: boolean
}

const arrowClass =
  'absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 text-[hsl(var(--foreground))] opacity-0 backdrop-blur transition-all duration-200 hover:bg-[hsl(var(--background))] group-hover/carousel:opacity-100'

export const Carousel = ({ children, className, loop = true }: Props) => {
  const slides = Children.toArray(children)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <div className="group/carousel relative">
      <div ref={emblaRef} className={cn('overflow-hidden', className)}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="w-full flex-none">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous"
            className={cn(arrowClass, 'left-3')}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Next"
            className={cn(arrowClass, 'right-3')}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  )
}
