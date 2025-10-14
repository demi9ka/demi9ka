import { Box, Divider } from '@mantine/core'
import css from './home.module.css'
import { Helmet } from './helmet'
import { Profile } from './ui/profile'
import { Statistics } from './ui/statisticcs'
import { Skills } from './ui/skills'
import { Portfolio } from './ui/portfolio'

export const Home = () => {
  return (
    <Box p={8} maw={768} mt={64} className={css.wrapper}>
      <Helmet />
      <Profile />
      <Divider my={16} mt={48} />
      <Statistics />
      <Divider my={16} />
      <Skills />
      <Divider my={16} />
      <Portfolio />
    </Box>
  )
}
