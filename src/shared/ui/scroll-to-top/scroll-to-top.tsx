import { scrollPositionStore } from '@/store/scroll-postoion-store'
import { ActionIcon } from '@mantine/core'
import { ArrowUp } from 'lucide-react'
import { observer } from 'mobx-react-lite'

export const ScrollToTop = observer(() => {
  const { goToTop, scrollPosition } = scrollPositionStore

  return (
    <ActionIcon
      size={'xl'}
      pos={'fixed'}
      style={{ transition: '.2s ease-in-out' }}
      bottom={20}
      right={scrollPosition.y > 10 ? 20 : -60}
      onClick={goToTop}
      bg={'white'}
      opacity={0.8}
    >
      <ArrowUp color='var(--mantine-color-violet-text)' />
    </ActionIcon>
  )
})
