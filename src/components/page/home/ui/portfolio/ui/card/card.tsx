import { Image } from '@/shared/ui/image'
import { AnimatedComponent } from '@/shared/ui/animated-component'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip'
import { Button } from '@/shared/ui/button'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { CardType } from '../../constants'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

type Props = CardType

export const Card = ({ githubRepositoryUrl, imgUrls, stackTechnology, siteUrl, localeId }: Props) => {
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
    <div className="break-inside-avoid mb-2 sm:mb-4">
      <AnimatedComponent animationType='slideUp' duration={0.7} delay={0.2} once={true} value={16}>
        <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
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
            {imgUrls.length > 1 && (
              <>
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 border border-border shadow flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
                  aria-label="Previous image"
                  disabled={!canScrollPrev}
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={() => emblaApi?.scrollNext()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 border border-border shadow flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
                  aria-label="Next image"
                  disabled={!canScrollNext}
                >
                  <ChevronRight size={14} />
                </button>
              </>
            )}
          </div>

          <div className="px-3 py-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-base font-semibold text-foreground">
                {t(`home.portfolio.projects.${localeId}.title`)}
              </span>
              <div className="flex items-center gap-1.5">
                {visibleStack.map(({ name, Icon }, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <span className="cursor-default">
                        <Icon size={16} color='default' />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>{name}</TooltipContent>
                  </Tooltip>
                ))}
                {hiddenCount > 0 && (
                  <span className="text-xs text-muted-foreground">+{hiddenCount}</span>
                )}
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              {t(`home.portfolio.projects.${localeId}.description`)}
            </p>

            <div className="flex gap-2">
              {Boolean(githubRepositoryUrl) && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="gap-1.5 text-xs h-7"
                >
                  <a href={githubRepositoryUrl ?? ''} target='_blank' rel='noopener noreferrer'>
                    {t('home.portfolio.open-github')}
                    <SiGithub size={13} />
                  </a>
                </Button>
              )}
              {Boolean(siteUrl) && (
                <Button
                  asChild
                  size="sm"
                  className="gap-1.5 text-xs h-7"
                >
                  <a href={siteUrl ?? ''} target='_blank' rel='noopener noreferrer'>
                    {t('home.portfolio.open-link')}
                    <Globe size={13} />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
}
