import { Title, type TitleProps } from '@mantine/core'

type Props = {
  title: string
} & TitleProps

export const SectionTitle = ({ title, ...props }: Props) => {
  return (
    <Title mt={48} mb={16} order={3} {...props}>
      {title}
    </Title>
  )
}
