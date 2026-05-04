import { SiGmail, SiTelegram, type IconType } from '@icons-pack/react-simple-icons'

export type ContactType = {
  Icon: IconType
  url: string
  label: string
  handle: string
}

export const CONTACT_DATA: ContactType[] = [
  {
    Icon: SiTelegram,
    url: 'https://t.me/demi9ka',
    label: 'Telegram',
    handle: '@demi9ka'
  },
  {
    Icon: SiGmail,
    url: 'mailto:grazz1wmel@gmail.com',
    label: 'Gmail',
    handle: 'grazz1wmel@gmail.com'
  }
]
