import { SiGithub, SiTelegram, SiGmail, type IconType } from '@icons-pack/react-simple-icons'

export type FooterLink = {
  Icon: IconType
  href: string
  label: string
}

export const FOOTER_LINKS: FooterLink[] = [
  { Icon: SiGithub, href: 'https://github.com/demi9ka', label: 'GitHub' },
  { Icon: SiTelegram, href: 'https://t.me/demi9ka', label: 'Telegram' },
  { Icon: SiGmail, href: 'mailto:grazz1wmel@gmail.com', label: 'Gmail' },
]

export const FOOTER_STACK = ['React', 'TypeScript', 'Tailwind', 'Vite']
