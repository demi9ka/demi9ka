import { FullImageModal } from '@/shared/ui/full-image-modal'
import { Header } from '@/shared/ui/header'
import { ScrollToTop } from '@/shared/ui/scroll-to-top'
import { scrollPositionStore } from '@/store/scroll-postoion-store'
import { ScrollArea } from '@mantine/core'

import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'

export const AppLayout = observer(() => {
  const { setScrollPosition, setViewportRef } = scrollPositionStore

  const viewport = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setViewportRef(viewport)
  }, [viewport])

  return (
    <ScrollArea viewportRef={viewport} pt={42} px={{ base: 'md', sm: 0 }} offsetScrollbars scrollbarSize={2} w={'100vw'} scrollbars={'y'} onScrollPositionChange={pos => setScrollPosition(pos)} h={'100svh'}>
      <Header />
      <Outlet />
      <ScrollToTop />
      <FullImageModal />
    </ScrollArea>
  )
})
