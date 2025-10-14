import {
  SiElectron,
  SiEslint,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJsonwebtokens,
  SiMobx,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPrettier,
  SiPrisma,
  SiPython,
  SiReact,
  SiReactquery,
  SiSass,
  SiStorybook,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
  SiVercel,
  SiVite,
  SiZod,
  SiNextdotjs,
  type IconType,
  SiNestjs,
  SiBitcoin,
  SiPaytmHex,
  SiPackagist,
  SiCoda,
  SiBlack,
  SiMantine,
  SiShadcnui
} from '@icons-pack/react-simple-icons'

export type SkillItemType = { text: string; icon: IconType }
export type SkillsType = Record<'frontend' | 'backend' | 'other', SkillItemType[]>

export const SKILLS: SkillsType = {
  frontend: [
    {
      text: 'Typescript',
      icon: SiTypescript
    },
    {
      text: 'React',
      icon: SiReact
    },
    {
      text: 'Next.js',
      icon: SiNextdotjs
    },

    {
      text: 'React query',
      icon: SiReactquery
    },
    {
      text: 'Zod',
      icon: SiZod
    },

    {
      text: 'Mobx',
      icon: SiMobx
    },
    {
      text: 'ShadCn',
      icon: SiShadcnui
    },
    {
      text: 'Tailwind',
      icon: SiTailwindcss
    },
    {
      text: 'Sass',
      icon: SiSass
    },
    {
      text: 'Mantine',
      icon: SiMantine
    }
  ],
  backend: [
    {
      text: 'Nest.js',
      icon: SiNestjs
    },
    {
      text: 'Express',
      icon: SiExpress
    },
    {
      text: 'Prisma',
      icon: SiPrisma
    },
    {
      text: 'Postgresql',
      icon: SiPostgresql
    },
    {
      text: 'Mysql',
      icon: SiMysql
    },

    {
      text: 'Crypto',
      icon: SiBitcoin
    }
  ],
  other: [
    {
      text: 'Git',
      icon: SiGit
    },

    {
      text: 'Eslint',
      icon: SiEslint
    },
    {
      text: 'Prettier',
      icon: SiPrettier
    },
    {
      text: 'Storybook',
      icon: SiStorybook
    },
    {
      text: 'Python',
      icon: SiPython
    }
  ]
}
