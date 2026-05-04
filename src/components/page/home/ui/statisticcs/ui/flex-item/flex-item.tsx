import { Title, Text, Flex } from '@mantine/core'

type Props = {
  title: string
  subTitle: string
}

export const FlexItem = ({ title, subTitle }: Props) => {
  return (
    <Flex direction={'column'} gap={4} justify={'center'} align={'center'} py={16} px={8} bg='gray.0' style={{ borderRadius: 8 }}>
      <Title order={2} fz={{ base: 28, sm: 36 }} c='blue.6'>{title}</Title>
      <Text ta='center' fz={{ base: 'xs', sm: 'sm' }} c='dimmed'>
        {subTitle}
      </Text>
    </Flex>
  )
}
