import { makeAutoObservable } from 'mobx'

export type ScrollPositionType = {
  x: number
  y: number
}

class ScrollPositionStore {
  scrollPosition: ScrollPositionType = {
    x: 0,
    y: 0,
  }

  constructor() {
    makeAutoObservable(this)
  }

  setScrollPosition = (position: ScrollPositionType) => {
    this.scrollPosition = position
  }
}

export const scrollPositionStore = new ScrollPositionStore()
