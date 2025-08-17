import { CodeIcon } from 'lucide-react'
import css from './header.module.css'
import { Flex } from '@mantine/core'
import { useScrollPosition } from '@/hooks/use-scroll-position'
import { LanguageSelect } from './ui/language-select'
import { ScrollProgress } from './ui/scroll-progress'

export const Header = () => {
  const scroll = useScrollPosition()

  return (
    <Flex bg={scroll > 10 ? 'dark.6' : ''} h={42} style={{ borderBottom: '1px solid var(--mantine-color-dark-5)' }} className={css.wrapper}>
      <Flex justify={'space-between'} align={'center'} className={css.header}>
        <CodeIcon stroke="var(--mantine-color-violet-4)" strokeWidth={2.5} width={20} />
        <LanguageSelect />
      </Flex>
      <ScrollProgress />
    </Flex>
  )
}
