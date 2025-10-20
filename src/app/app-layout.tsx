import { Footer } from '@/shared/ui/footer'
import { Header } from '@/shared/ui/header'
import { ScrollToTop } from '@/shared/ui/scroll-to-top'
import { scrollPositionStore } from '@/store/scroll-postoion-store'
import { Box, Container, ScrollArea } from '@mantine/core'
import { useThrottle } from '@uidotdev/usehooks'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

export const AppLayout = observer(() => {
  const { setScrollPosition, setViewportRef } = scrollPositionStore

  const [scrollValue, setScrollValue] = useState({
    x: 0,
    y: 0
  })
  const scrollValueDebounce = useThrottle(scrollValue, 50)

  const viewport = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setViewportRef(viewport)
  }, [viewport])

  useEffect(() => {
    setScrollPosition(scrollValueDebounce)
  }, [scrollValueDebounce])

  return (
    <ScrollArea
      viewportRef={viewport}
      pt={42}
      offsetScrollbars
      scrollbarSize={2}
      scrollbars={'y'}
      onScrollPositionChange={pos => setScrollValue(pos)}
      w={'100vw'}
      h={'100svh'}
    >
      <Header />
      <Container px={16} bg={'dark.7'} strategy='grid' mb={49} mt={64} pos={'relative'} style={{ zIndex: 2 }}>
        <Box maw={768} mb={12} mx={'auto'}>
          <Outlet />
        </Box>
      </Container>
      <ScrollToTop />
      <Footer />
    </ScrollArea>
  )
})
