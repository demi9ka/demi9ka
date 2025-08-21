import { CodeIcon } from 'lucide-react'
import css from './header.module.css'
import { Box, Flex } from '@mantine/core'
import { LanguageSelect } from './ui/language-select'
import { ScrollProgress } from './ui/scroll-progress'
import { AnimatedComponent } from '../animated-component'
import { observer } from 'mobx-react-lite'
import { scrollPositionStore } from '@/store/scroll-postoion-store'
import { combaneCSS } from '@/helpers/combane-css'

export const Header = observer(() => {
  const { scrollPosition } = scrollPositionStore
  const isIslandHeader = scrollPosition.y > 2

  return (
    <Box className={combaneCSS(css.wrapper, isIslandHeader ? css.islandHeader : '')}>
      <Flex className={css.header}>
        <AnimatedComponent animationType="slideRight" duration={0.5} delay={0.2} once={false} value={-10}>
          <Flex className={css.iconWrapper}>
            <CodeIcon strokeWidth={2.5} />
          </Flex>
        </AnimatedComponent>
        <LanguageSelect />
      </Flex>
      <ScrollProgress />
    </Box>
  )
})
