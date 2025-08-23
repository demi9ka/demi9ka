import {
  SiElectron,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJsonwebtokens,
  SiMobx,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReactquery,
  SiSass,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
  SiVercel,
  SiVite,
  type IconType,
} from '@icons-pack/react-simple-icons'

export type SkillItemType = { text: string; icon: IconType }
export type SkillsType = Record<'frontend' | 'backend' | 'other', SkillItemType[]>

export const SKILLS: SkillsType = {
  frontend: [
    {
      text: 'HTML5',
      icon: SiHtml5,
    },

    {
      text: 'Sass',
      icon: SiSass,
    },
    {
      text: 'Typescript',
      icon: SiTypescript,
    },
    {
      text: 'React',
      icon: SiReact,
    },
    {
      text: 'React native',
      icon: SiReact,
    },
    {
      text: 'React query',
      icon: SiReactquery,
    },

    {
      text: 'Mobx',
      icon: SiMobx,
    },
    {
      text: 'Tailwind',
      icon: SiTailwindcss,
    },
    {
      text: 'Vite',
      icon: SiVite,
    },
  ],
  backend: [
    {
      text: 'Node js',
      icon: SiNodedotjs,
    },
    {
      text: 'Express',
      icon: SiExpress,
    },
    {
      text: 'Prisma',
      icon: SiPrisma,
    },
    {
      text: 'Postgresql',
      icon: SiPostgresql,
    },
    {
      text: 'Mysql',
      icon: SiMysql,
    },
    {
      text: 'JWT',
      icon: SiJsonwebtokens,
    },
  ],
  other: [
    {
      text: 'Git',
      icon: SiGit,
    },
    {
      text: 'Vercel',
      icon: SiVercel,
    },
    {
      text: 'Electron',
      icon: SiElectron,
    },
    {
      text: 'Telegram bots',
      icon: SiTelegram,
    },
    {
      text: 'Mini app',
      icon: SiTelegram,
    },

    {
      text: 'Python',
      icon: SiPython,
    },
  ],
}
