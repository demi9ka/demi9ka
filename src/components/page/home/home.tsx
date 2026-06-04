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
      <div className="my-10">
        <Statistics />
      </div>
      <hr className="border-border mb-10" />
      <Skills />
      <hr className="border-border my-10" />
      <Contacts />
      <hr className="border-border my-10" />
      <Portfolio />
    </div>
  )
}
