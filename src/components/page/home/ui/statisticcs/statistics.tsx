import { FlexItem } from './ui/flex-item'
import { AnimatedComponent } from '@/shared/ui/animated-component'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '@/shared/ui/section-title'

const YEAR_IN_IT = new Date().getFullYear() - 2021
const YEAR_WORK = new Date().getFullYear() - 2023
const COMPLETED_PROJECTS = 10

export const Statistics = () => {
  const { t } = useTranslation()
  return (
    <div>
      <SectionTitle title="stats" index="01" />
      <div className="grid grid-cols-3 divide-x divide-[hsl(var(--border))] border border-[hsl(var(--border))]">
        <AnimatedComponent animationType="slideUp" duration={0.6} delay={0.1} once={false} value={10} style={{ display: 'flex' }}>
          <FlexItem subTitle={t('home.statistics.years-in-it', { count: YEAR_IN_IT })} title={`${YEAR_IN_IT}+`} />
        </AnimatedComponent>
        <AnimatedComponent animationType="slideUp" duration={0.6} delay={0.2} once={false} value={10} style={{ display: 'flex' }}>
          <FlexItem subTitle={t('home.statistics.completed-projects')} title={`${COMPLETED_PROJECTS}+`} />
        </AnimatedComponent>
        <AnimatedComponent animationType="slideUp" duration={0.6} delay={0.3} once={false} value={10} style={{ display: 'flex' }}>
          <FlexItem subTitle={t('home.statistics.years-work', { count: YEAR_WORK })} title={`${YEAR_WORK}+`} />
        </AnimatedComponent>
      </div>
    </div>
  )
}
