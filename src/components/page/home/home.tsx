import { Box } from '@mantine/core'
import css from './home.module.css'

import { Helmet } from './helmet'
import { Profile } from './ui/profile'

export const Home = () => {
  return (
    <Box p={8} maw={768} mt={64} className={css.wrapper}>
      <Helmet />
      <Profile />
    </Box>
  )
}
