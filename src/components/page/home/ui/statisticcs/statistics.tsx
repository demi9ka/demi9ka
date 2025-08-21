import { Grid } from '@mantine/core'
import { FlexItem } from './ui/flex-item'
import { AnimatedComponent } from '@/shared/ui/animated-component'

export const Statistics = () => {
  return (
    <Grid gutter={4}>
      <Grid.Col span={4}>
        <AnimatedComponent animationType="rotate" duration={1} delay={0.2} once={false} value={30}>
          <FlexItem subTitle="Года работы" title="4+" />
        </AnimatedComponent>
      </Grid.Col>
      <Grid.Col span={4}>
        <AnimatedComponent animationType="rotate" duration={1} delay={0.3} once={false} value={30}>
          <FlexItem subTitle="Завершённые проекты" title="10+" />
        </AnimatedComponent>
      </Grid.Col>
      <Grid.Col span={4}>
        <AnimatedComponent animationType="rotate" duration={1.2} delay={0.4} once={false} value={30}>
          <FlexItem subTitle="Ещё чего то" title="13+" />
        </AnimatedComponent>
      </Grid.Col>
    </Grid>
  )
}
