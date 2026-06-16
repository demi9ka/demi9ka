import { Image } from '@/shared/ui/image'
import { AnimatedComponent } from '@/shared/ui/animated-component'
import { Carousel } from '@/shared/ui/carousel'
import { useTranslation } from 'react-i18next'
import type { CardType } from '../../constants'
import { ProjectLinks } from './ui/project-links'

type Props = CardType & { cardIndex: number }

export const Card = ({ githubRepositoryUrl, imgUrls, stackTechnology, siteUrl, localeId, cardIndex }: Props) => {
  const { t } = useTranslation()

  const stack = stackTechnology.map(s => s.name).join('  ·  ')

  return (
    <AnimatedComponent animationType="slideUp" duration={0.6} delay={0.05 * (cardIndex % 4)} once value={20} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] transition-colors duration-200 hover:border-[hsl(0_0%_28%)]">
        {/* Media */}
        <div className="relative border-b border-[hsl(var(--border))]">
          <Carousel className="rounded-t-xl">
            {imgUrls.map((el, i) => (
              <a key={i} href={el} target="_blank" rel="noopener noreferrer" className="block aspect-[16/10]">
                <Image
                  src={el}
                  w="100%"
                  h="100%"
                  alt={`project-${localeId}-${i}`}
                  className="h-full object-cover object-top"
                />
              </a>
            ))}
          </Carousel>

          {/* Index badge */}
          <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 px-1.5 py-0.5 font-mono text-[11px] text-[hsl(var(--foreground))] backdrop-blur">
            {String(cardIndex + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold leading-snug tracking-tight text-[hsl(var(--foreground))]">
              {t(`home.portfolio.projects.${localeId}.title`)}
            </h3>
            <ProjectLinks githubRepositoryUrl={githubRepositoryUrl} siteUrl={siteUrl} />
          </div>

          <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
            {t(`home.portfolio.projects.${localeId}.description`)}
          </p>

          <div className="mt-auto border-t border-[hsl(var(--border))] pt-3.5 font-mono text-[11px] leading-relaxed tracking-wide text-[hsl(0_0%_42%)]">
            <span className="line-clamp-2">{stack}</span>
          </div>
        </div>
      </div>
    </AnimatedComponent>
  )
}
