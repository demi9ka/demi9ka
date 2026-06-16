import { Helmet } from './helmet'
import { Profile } from './ui/profile'
import { Skills } from './ui/skills'
import { Portfolio } from './ui/portfolio'
import { Contacts } from './ui/contacts'

export const Home = () => {
  return (
    <div id="top" className="flex flex-col">
      <Helmet />
      <Profile />
      <Portfolio />
      <Skills />
      <Contacts />
    </div>
  )
}
