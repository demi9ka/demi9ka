import {
  SiBitcoin,
  SiExpress,
  SiMobx,
  SiMysql,
  SiNushell,
  SiReact,
  SiReactquery,
  SiStyledcomponents,
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
}

export const DATA: CardType[] = [
  {
    siteUrl: 'https://vuscan.net/ru',
    imgUrls: ['/vuscan-1.webp', '/vuscan-2.webp', '/vuscan-3.webp'],
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
      },
      {
        Icon: SiBitcoin,
        name: 'Crypto'
      }
    ]
  },
  {
    imgUrls: ['/bank-app-1.webp', '/bank-app-2.webp', '/bank-app-3.webp'],
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
        Icon: SiNushell,
        name: 'Effector'
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
  }
]
