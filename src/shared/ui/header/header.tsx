import { CodeIcon } from 'lucide-react'
import css from './header.module.css'
import { ActionIcon, Box, Flex } from '@mantine/core'
import { LanguageSelect } from './ui/language-select'
import { AnimatedComponent } from '../animated-component'
export const Header = () => {
  return (
    <Box className={css.wrapper}>
      <Flex className={css.header}>
        <AnimatedComponent animationType='slideRight' duration={0.5} delay={0.2} once={false} value={-10}>
          <ActionIcon variant='filled' bg='blue' p={4} radius='xl' aria-label='icon' style={{ cursor: 'default' }}>
            <CodeIcon strokeWidth={2.5} size={20} />
          </ActionIcon>
        </AnimatedComponent>
        <LanguageSelect />
      </Flex>
    </Box>
  )
}
