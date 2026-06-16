import { Header } from '@/shared/ui/header'
import { Footer } from '@/shared/ui/footer'
import { ScrollToTop } from '@/shared/ui/scroll-to-top'
import { scrollPositionStore } from '@/store/scroll-postoion-store'
import { useThrottle } from '@uidotdev/usehooks'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

export const AppLayout = observer(() => {
  const { setScrollPosition, setViewportRef } = scrollPositionStore

  const [scrollValue, setScrollValue] = useState({ x: 0, y: 0 })
  const scrollValueDebounce = useThrottle(scrollValue, 50)

  const viewport = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setViewportRef(viewport)
  }, [viewport])

  useEffect(() => {
    setScrollPosition(scrollValueDebounce)
  }, [scrollValueDebounce])

  useEffect(() => {
    const el = viewport.current
    if (!el) return
    const handleScroll = () => setScrollValue({ x: el.scrollLeft, y: el.scrollTop })
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={viewport}
      className="w-screen h-svh overflow-y-auto overflow-x-hidden relative bg-[hsl(var(--background))]"
    >
      <Header />

      <main className="relative z-10 pt-14">
        <Outlet />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
})
