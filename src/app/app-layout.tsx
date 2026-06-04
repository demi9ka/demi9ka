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
      className="w-screen h-svh overflow-y-auto overflow-x-hidden relative grid-bg"
      style={{ scrollbarWidth: 'thin', scrollbarColor: 'hsl(222 15% 13%) hsl(222 25% 5%)' }}
    >
      {/* Radial glow top center */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.12]"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #6366f1 0%, transparent 70%)' }}
      />

      <Header />

      <div className="pt-14 px-4 relative z-10">
        <div className="max-w-[760px] mx-auto mt-12">
          <Outlet />
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  )
})
