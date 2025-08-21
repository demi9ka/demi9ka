import { Header } from '@/shared/ui/header'
import { scrollPositionStore } from '@/store/scroll-postoion-store'
import { ScrollArea } from '@mantine/core'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  const { setScrollPosition } = scrollPositionStore

  return (
    <ScrollArea pt={42} pb={64} offsetScrollbars scrollbarSize={2} w={'100vw'} scrollbars={'y'} onScrollPositionChange={pos => setScrollPosition(pos)} h={'100svh'}>
      <Header />
      <Outlet />
    </ScrollArea>
  )
}
