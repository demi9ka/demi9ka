import { scrollPositionStore } from '@/store/scroll-postoion-store'
import { ActionIcon } from '@mantine/core'
import { ArrowUp } from 'lucide-react'
import { observer } from 'mobx-react-lite'

export const ScrollToTop = observer(() => {
  const { goToTop, scrollPosition } = scrollPositionStore

  return (
    <ActionIcon size={'lg'} pos={'fixed'} style={{ transition: '.2s ease-in-out' }} bottom={20} right={scrollPosition.y > 10 ? 20 : -60} onClick={goToTop} bg={'violet.5'}>
      <ArrowUp />
    </ActionIcon>
  )
})
