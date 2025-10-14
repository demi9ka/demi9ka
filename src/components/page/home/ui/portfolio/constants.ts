import { SiExpress, SiReact, SiTypescript, SiReactquery, SiMobx, SiZod, type IconType, SiMysql, SiNushell, SiStyledcomponents } from '@icons-pack/react-simple-icons'

export type CardType = {
  title: string
  imgUrl: string[]
  description: string
  link?: string
  githubLink?: string
  stackList: {
    Icon: IconType
    name: string
  }[]
}

export const DATA: CardType[] = [
  {
    title: 'Vuscan',
    imgUrl: ['/portfolio-1-1.webp', '/portfolio-1-2.webp', '/portfolio-1-3.webp', '/portfolio-1-4.webp'],
    description: 'Приложение по определению язвимостей других сайтов',
    link: 'https://vuscan.net',

    stackList: [
      {
        Icon: SiReact,
        name: 'React',
      },
      {
        Icon: SiTypescript,
        name: 'Typescript',
      },
      {
        Icon: SiReactquery,
        name: 'React query',
      },
      {
        Icon: SiMobx,
        name: 'Mobx',
      },
      {
        Icon: SiZod,
        name: 'Zod',
      },
      {
        Icon: SiExpress,
        name: 'Express',
      },
      {
        Icon: SiMysql,
        name: 'Mysql',
      },
    ],
  },
  {
    title: 'KODE банк',
    imgUrl: ['/portfolio-2-1.webp', '/portfolio-2-2.webp', '/portfolio-2-3.webp', '/portfolio-2-4.webp', '/portfolio-2-5.webp', '/portfolio-2-6.webp'],
    description: 'Мобильное приложение банка на React Native',
    githubLink: 'hhttps://github.com/demi9ka/kode-study',

    stackList: [
      {
        Icon: SiReact,
        name: 'React Native',
      },
      {
        Icon: SiTypescript,
        name: 'Typescript',
      },
      {
        Icon: SiReactquery,
        name: 'React query',
      },
      {
        Icon: SiNushell,
        name: 'Effector',
      },
      {
        Icon: SiZod,
        name: 'Zod',
      },
      {
        Icon: SiStyledcomponents,
        name: 'Styled component',
      },
    ],
  },
  {
    title: 'Название',
    imgUrl: [
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    ],
    description:
      'Card.Section is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. Card.Section works the following way:Card.Section is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. Card.Section works the following way:Card.Section is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. Card.Section works the following way:Card.Section is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. Card.Section works the following way:',
    link: 'file:///C:/file/project/%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE.jpg',
    githubLink: 'file:///C:/file/project/%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE.jpg',
    stackList: [
      {
        Icon: SiReact,
        name: 'React',
      },
      {
        Icon: SiTypescript,
        name: 'Typescript',
      },
    ],
  },
  {
    title: 'Название',
    imgUrl: [
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    ],
    description:
      'Card.Section is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. Card.Section works the following way:Card.Section is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. Card.Section works the following way:Card.Section is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. Card.Section works the following way:Card.Section is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. Card.Section works the following way:',
    link: 'file:///C:/file/project/%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE.jpg',
    githubLink: 'file:///C:/file/project/%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE.jpg',
    stackList: [
      {
        Icon: SiReact,
        name: 'React',
      },
      {
        Icon: SiTypescript,
        name: 'Typescript',
      },
    ],
  },
]
