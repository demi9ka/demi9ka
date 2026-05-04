import { Box, Divider } from '@mantine/core'
import { Helmet } from './helmet'
import { Profile } from './ui/profile'
import { Statistics } from './ui/statisticcs'
import { Skills } from './ui/skills'
import { Portfolio } from './ui/portfolio'
import { Contacts } from './ui/contacts'

export const Home = () => {
  return (
    <Box>
      <Helmet />
      <Profile />
      <Box my={40}><Statistics /></Box>
      <Divider mb={40} />
      <Skills />
      <Divider my={40} />
      <Contacts />
      <Divider my={40} />
      <Portfolio />
    </Box>
  )
}
