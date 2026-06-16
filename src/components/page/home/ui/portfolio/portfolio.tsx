import { Container } from '@/shared/ui/container'
import { useTranslation } from 'react-i18next'
import { DATA } from './constants'
import { Card } from './ui/card'

export const Portfolio = () => {
  const { t } = useTranslation()

  return (
    <section className="py-20 sm:py-24">
      <Container size="wide">
        <div className="mb-12 flex items-end justify-between gap-4 border-b border-[hsl(var(--border))] pb-6">
          <div>
            <div className="mb-2 font-mono text-xs text-[hsl(var(--muted-foreground))]">01 / work</div>
            <h2 className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl">
              {t('home.portfolio.title')}
            </h2>
          </div>
          <span className="shrink-0 pb-1 font-mono text-xs text-[hsl(var(--muted-foreground))]">
            {DATA.length} {t('home.portfolio.label')}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {DATA.map((el, i) => (
            <Card key={i} {...el} cardIndex={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
