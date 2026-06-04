import { Image } from '@/shared/ui/image'
import { AnimatedComponent } from '@/shared/ui/animated-component'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { CardType } from '../../constants'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

type Props = CardType & { cardIndex: number }

export const Card = ({ githubRepositoryUrl, imgUrls, stackTechnology, siteUrl, localeId, cardIndex }: Props) => {
  const { t } = useTranslation()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
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

  const visibleStack = stackTechnology.slice(0, 5)
  const hiddenCount = stackTechnology.length - visibleStack.length

  return (
    <AnimatedComponent animationType='slideUp' duration={0.6} delay={0.05 * (cardIndex % 4)} once={true} value={16}>
      <div className="group border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-indigo-500/40 transition-all duration-200 overflow-hidden relative">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-0 h-[1px] bg-indigo-500 group-hover:w-full transition-all duration-500 z-10" />

        {/* Card number */}
        <div className="absolute top-2 left-2 z-20 font-mono text-[10px] text-indigo-400/60 tracking-wider">
          {String(cardIndex + 1).padStart(2, '0')}
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {imgUrls.map((el, i) => (
              <div key={i} className="flex-none w-full">
                <a href={el} target='_blank' rel='noopener noreferrer' className="block">
                  <Image src={el} alt={`project-${localeId}-${i}`} className="w-full" />
                </a>
              </div>
            ))}
          </div>

          {/* Gradient overlay bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[hsl(var(--card))] to-transparent pointer-events-none" />

          {imgUrls.length > 1 && (
            <>
              <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 flex items-center justify-center hover:border-indigo-500/50 hover:text-indigo-400 transition-all cursor-pointer text-[hsl(var(--muted-foreground))]"
                aria-label="Previous"
              >
                <ChevronLeft size={13} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 flex items-center justify-center hover:border-indigo-500/50 hover:text-indigo-400 transition-all cursor-pointer text-[hsl(var(--muted-foreground))]"
                aria-label="Next"
              >
                <ChevronRight size={13} />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="px-4 pt-3 pb-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <span className="font-semibold text-[hsl(var(--foreground))] leading-snug">
              {t(`home.portfolio.projects.${localeId}.title`)}
            </span>
            <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
              {visibleStack.map(({ name, Icon }, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <span className="cursor-default text-[hsl(var(--muted-foreground))] hover:text-indigo-400 transition-colors">
                      <Icon size={14} color='default' />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>{name}</TooltipContent>
                </Tooltip>
              ))}
              {hiddenCount > 0 && (
                <span className="font-mono text-[10px] text-[hsl(var(--muted-foreground))]">+{hiddenCount}</span>
              )}
            </div>
          </div>

          <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
            {t(`home.portfolio.projects.${localeId}.description`)}
          </p>

          <div className="flex gap-2">
            {Boolean(githubRepositoryUrl) && (
              <a
                href={githubRepositoryUrl ?? ''}
                target='_blank'
                rel='noopener noreferrer'
                className="flex items-center gap-1.5 border border-[hsl(var(--border))] px-3 py-1.5 text-xs font-mono text-[hsl(var(--muted-foreground))] hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-150 uppercase tracking-wider"
              >
                <SiGithub size={11} />
                {t('home.portfolio.open-github')}
              </a>
            )}
            {Boolean(siteUrl) && (
              <a
                href={siteUrl ?? ''}
                target='_blank'
                rel='noopener noreferrer'
                className="flex items-center gap-1.5 border border-indigo-500/50 bg-indigo-600/10 px-3 py-1.5 text-xs font-mono text-indigo-400 hover:bg-indigo-600/20 hover:border-indigo-400 transition-all duration-150 uppercase tracking-wider"
              >
                <Globe size={11} />
                {t('home.portfolio.open-link')}
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimatedComponent>
  )
}
