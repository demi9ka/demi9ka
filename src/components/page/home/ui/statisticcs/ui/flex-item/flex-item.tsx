import { Title, Text, Flex } from '@mantine/core'

type Props = {
  title: string
  subTitle: string
}

export const FlexItem = ({ title, subTitle }: Props) => {
  return (
    <Flex direction={'column'} gap={{ base: 4, sm: 'xs' }} justify={'center'} align={'center '}>
      <Title order={3}>{title}</Title>
      <Text fz={{ base: 'xs', sm: 'md' }} ta={'center'}>
        {subTitle}
      </Text>
    </Flex>
  )
}
