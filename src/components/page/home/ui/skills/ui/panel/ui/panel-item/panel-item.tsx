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
    <Grid.Col span={{ base: 6, sm: 3 }}>
      <AnimatedComponent animationType='fade' duration={0.8} delay={delay || 0.2} once={false} value={10}>
        <Flex
          style={{ borderRadius: 4, border: '1px solid var(--mantine-color-gray-3)', height: 44 }}
          py={8}
          px={12}
          bg={'gray.0'}
          gap={16}
          align={'center'}
        >
          <Icon color={'default'} size={20} style={{ flexShrink: 0 }} />
          <Text size='sm' truncate='end'>{text}</Text>
        </Flex>
      </AnimatedComponent>
    </Grid.Col>
  )
}
