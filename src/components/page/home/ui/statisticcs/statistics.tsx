import { Grid } from '@mantine/core'
import { FlexItem } from './ui/flex-item'
import { AnimatedComponent } from '@/shared/ui/animated-component'
import { useTranslation } from 'react-i18next'

const YEAR_IN_IT = new Date().getFullYear() - 2021
const YEAR_WORK = new Date().getFullYear() - 2024
const COMPLETED_PROJECTS = 10

export const Statistics = () => {
  const { t } = useTranslation()
  return (
    <Grid gutter={4}>
      <Grid.Col span={4}>
        <AnimatedComponent animationType="rotate" duration={1} delay={0.2} once={false} value={30}>
          <FlexItem subTitle={t('home.statistics.years-in-it', { count: YEAR_IN_IT })} title={`${YEAR_IN_IT}+`} />
        </AnimatedComponent>
      </Grid.Col>
      <Grid.Col span={4}>
        <AnimatedComponent animationType="rotate" duration={1} delay={0.3} once={false} value={30}>
          <FlexItem subTitle={t('home.statistics.completed-projects')} title={`${COMPLETED_PROJECTS}+`} />
        </AnimatedComponent>
      </Grid.Col>
      <Grid.Col span={4}>
        <AnimatedComponent animationType="rotate" duration={1.2} delay={0.4} once={false} value={30}>
          <FlexItem subTitle={t('home.statistics.years-work', { count: YEAR_WORK + 1 })} title={`${YEAR_WORK}.5+`} />
        </AnimatedComponent>
      </Grid.Col>
    </Grid>
  )
}
