import { Helmet } from './helmet'
import { Profile } from './ui/profile'
import { Statistics } from './ui/statisticcs'
import { Skills } from './ui/skills'
import { Portfolio } from './ui/portfolio'
import { Contacts } from './ui/contacts'

export const Home = () => {
  return (
    <div>
      <Helmet />
      <Profile />
      <Statistics />
      <Skills />
      <Contacts />
      <Portfolio />
    </div>
  )
}
