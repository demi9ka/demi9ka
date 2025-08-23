import { AnimatedComponent } from '@/shared/ui/animated-component'
import type { IconType } from '@icons-pack/react-simple-icons'
import { Flex, Grid, Text } from '@mantine/core'

type Props = {
  Icon: IconType
  text: string
  delay?: number
}

export const PanelItem = ({ Icon, text, delay }: Props) => {
  return (
    <Grid.Col span={{ base: 4, sm: 3 }}>
      <AnimatedComponent animationType="fade" duration={1.2} delay={delay || 0.2} once={false} value={10}>
        <Flex style={{ borderRadius: 4 }} py={'xs'} px={'md'} bg={'dark.6'} gap={12} align={'center'}>
          <Icon color={'default'} size={20} />
          <Text>{text}</Text>
        </Flex>
      </AnimatedComponent>
    </Grid.Col>
  )
}
