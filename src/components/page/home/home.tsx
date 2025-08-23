import { Box, Divider } from '@mantine/core'
import css from './home.module.css'
import { Helmet } from './helmet'
import { Profile } from './ui/profile'
import { Statistics } from './ui/statisticcs'
import { Skills } from './ui/skills'

export const Home = () => {
  return (
    <Box p={8} maw={768} mt={64} className={css.wrapper}>
      <Helmet />
      <Profile />
      <Divider mt={64} mb={32} />
      <Statistics />
      <Divider my={32} />
      <Skills />
    </Box>
  )
}
