import { Link } from 'react-router-dom'
import { Text } from '@mantine/core'

type Props = {
  to: string
  text: string
}

export const Navigation = ({ text, to }: Props) => {
  return (
    <Link to={to}>
      <Text size='sm' c={'gray.6'} td={'none'}>
        {text}
      </Text>
    </Link>
  )
}
