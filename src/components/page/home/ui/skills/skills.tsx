import { SectionTitle } from '@/shared/ui/section-title'
import { Container } from '@/shared/ui/container'
import { AnimatedComponent } from '@/shared/ui/animated-component'
import { useTranslation } from 'react-i18next'
import { Panel } from './ui/panel'
import { SKILLS } from './constants'

const ROWS = [
  { key: 'frontend', data: SKILLS.frontend },
  { key: 'backend', data: SKILLS.backend },
  { key: 'other', data: SKILLS.other },
] as const

export const Skills = () => {
  const { t } = useTranslation()

  return (
    <section id="skills" className="border-t border-[hsl(var(--border))] py-20 sm:py-24" style={{ scrollMarginTop: 60 }}>
      <Container>
        <SectionTitle title={t('home.skills.title')} label="02 / stack" />
        <div className="border-t border-[hsl(var(--border))]">
          {ROWS.map(({ key, data }, i) => (
            <AnimatedComponent key={key} animationType="slideUp" duration={0.5} delay={i * 0.08} once value={12}>
              <div className="flex flex-col gap-4 border-b border-[hsl(var(--border))] py-7 sm:flex-row sm:gap-10">
                <div className="flex shrink-0 items-baseline gap-2 sm:w-40 sm:flex-col sm:items-start sm:gap-1">
                  <span className="text-sm font-medium text-[hsl(var(--foreground))]">
                    {t(`home.skills.tabs.${key}`)}
                  </span>
                  <span className="font-mono text-xs text-[hsl(var(--muted-foreground))]">
                    {String(data.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1">
                  <Panel data={data} />
                </div>
              </div>
            </AnimatedComponent>
          ))}
        </div>
      </Container>
    </section>
  )
}
