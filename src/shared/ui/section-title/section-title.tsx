import { Title } from '@mantine/core'

type Props = {
  title: string
}

export const SectionTitle = ({ title }: Props) => {
  return (
    <Title mt={48} mb={16} order={3}>
      {title}
    </Title>
  )
}
