import { SiDiscord, SiGithub, SiGmail, SiTelegram, type IconType } from '@icons-pack/react-simple-icons'

export type ContactType = {
  Icon: IconType

  url: string
}

export const CONTACT_DATA: ContactType[] = [
  {
    Icon: SiTelegram,
    url: 'https://t.me/demi9ka'
  },
  {
    Icon: SiDiscord,
    url: 'https://discord.com/users/812542562321039360'
  },
  {
    Icon: SiGithub,
    url: 'https://github.com/demi9ka'
  },
  {
    Icon: SiGmail,
    url: 'mailto:grazz1wmel@gmail.com'
  }
]
