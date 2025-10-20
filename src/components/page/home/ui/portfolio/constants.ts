import {
  SiExpress,
  SiMobx,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiStyledcomponents,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
  SiZod,
  type IconType
} from '@icons-pack/react-simple-icons'

export type CardType = {
  imgUrls: string[]
  siteUrl?: string
  githubRepositoryUrl?: string
  stackTechnology: {
    Icon: IconType
    name: string
  }[]
  localeId: number
}

export const DATA: CardType[] = [
  {
    imgUrls: ['/spyq-1.webp', '/spyq-2.webp', '/spyq-3.webp', '/spyq-4.webp', '/spyq-5.webp'],
    githubRepositoryUrl: 'https://github.com/demi9ka/spy-q',
    localeId: 3,
    siteUrl: 'https://spyq.net',
    stackTechnology: [
      {
        Icon: SiTypescript,
        name: 'Typescript'
      },
      {
        Icon: SiNextdotjs,
        name: 'Next.js'
      },
      {
        Icon: SiMobx,
        name: 'Mobx'
      },
      {
        Icon: SiTailwindcss,
        name: 'Tailwindcss'
      },
      {
        Icon: SiRadixui,
        name: 'RadixUi'
      },
      {
        Icon: SiNestjs,
        name: 'Nest.js'
      },
      {
        Icon: SiPrisma,
        name: 'Prisma ORM'
      },
      {
        Icon: SiPostgresql,
        name: 'PostgreSQL'
      }
    ]
  },
  {
    siteUrl: 'https://vuscan.net/ru',
    localeId: 0,
    githubRepositoryUrl: 'https://github.com/demi9ka/vuscan',
    imgUrls: ['/vuscan-1.webp', '/vuscan-2.webp', '/vuscan-3.webp'],
    stackTechnology: [
      {
        Icon: SiTypescript,
        name: 'Typescript'
      },
      {
        Icon: SiReact,
        name: 'React'
      },
      {
        Icon: SiReactquery,
        name: 'React query'
      },
      {
        Icon: SiMobx,
        name: 'Mobx'
      },

      {
        Icon: SiExpress,
        name: 'Express'
      },
      {
        Icon: SiMysql,
        name: 'Mysql'
      }
    ]
  },
  {
    imgUrls: ['/bank-app-1.webp', '/bank-app-2.webp', '/bank-app-3.webp'],
    localeId: 1,
    githubRepositoryUrl: 'https://github.com/demi9ka/vuscan',
    stackTechnology: [
      {
        Icon: SiReact,
        name: 'React Native'
      },
      {
        Icon: SiTypescript,
        name: 'Typescript'
      },
      {
        Icon: SiReactquery,
        name: 'React query'
      },
      {
        Icon: SiZod,
        name: 'Zod'
      },
      {
        Icon: SiStyledcomponents,
        name: 'Styled component'
      }
    ]
  },
  {
    imgUrls: ['/quiz-1.webp', '/quiz-2.webp', '/quiz-3.webp', '/quiz-4.webp', '/quiz-5.webp', '/quiz-6.webp'],
    localeId: 2,
    githubRepositoryUrl: 'https://github.com/demi9ka/quiz',
    stackTechnology: [
      {
        Icon: SiReact,
        name: 'React'
      },
      {
        Icon: SiTypescript,
        name: 'Typescript'
      },
      {
        Icon: SiExpress,
        name: 'Express'
      },
      {
        Icon: SiTelegram,
        name: 'Telegram bot'
      }
    ]
  }
]
