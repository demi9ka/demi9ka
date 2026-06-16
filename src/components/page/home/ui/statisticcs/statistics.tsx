import { FlexItem } from './ui/flex-item'
import { AnimatedComponent } from '@/shared/ui/animated-component'
import { useTranslation } from 'react-i18next'

const YEAR_IN_IT = new Date().getFullYear() - 2021
const COMPLETED_PROJECTS = 10

export const Statistics = () => {
  const { t } = useTranslation()
  return (
    <AnimatedComponent animationType="slideUp" duration={0.6} delay={0.5} value={14}>
      <div className="mt-12 flex items-center divide-x divide-[hsl(var(--border))] [&>*:first-child]:pl-0">
        <FlexItem title={`${YEAR_IN_IT}+`} subTitle={t('home.statistics.years-in-it', { count: YEAR_IN_IT })} />
        <FlexItem title={`${COMPLETED_PROJECTS}+`} subTitle={t('home.statistics.completed-projects')} />
      </div>
    </AnimatedComponent>
  )
}
