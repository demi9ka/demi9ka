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
      <Divider my={16} mt={48} />
      <Statistics />
      <Divider my={16} />
      <Skills />
      <Divider my={16} />
      <Contacts />
      <Divider my={16} />
      <Portfolio />
    </Box>
  )
}
