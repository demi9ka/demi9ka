import { makeAutoObservable } from 'mobx'
import type { RefObject } from 'react'

export type ScrollPositionType = {
  x: number
  y: number
}

class ScrollPositionStore {
  scrollPosition: ScrollPositionType = {
    x: 0,
    y: 0,
  }
  viewportRef: RefObject<HTMLDivElement | null> | null = null

  constructor() {
    makeAutoObservable(this)
  }

  goToTop = () => {
    if (this.viewportRef == null || this.viewportRef.current == null) return
    this.viewportRef.current.scrollTo({ top: 0, behavior: 'smooth' })
  }

  setScrollPosition = (position: ScrollPositionType) => {
    this.scrollPosition = position
  }
  setViewportRef = (viewport: RefObject<HTMLDivElement | null>) => {
    this.viewportRef = viewport
  }
}

export const scrollPositionStore = new ScrollPositionStore()
