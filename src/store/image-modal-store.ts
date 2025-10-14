import { makeAutoObservable } from 'mobx'

class ImageModalStore {
  opened = false
  imageUrl: string | null = null

  constructor() {
    makeAutoObservable(this)
  }
  setOpened = (state: boolean) => {
    this.opened = state
  }
  setImageUrl = (url: string | null) => {
    if (url !== null) this.setOpened(true)
    this.imageUrl = url
  }
}

export const imageModalStore = new ImageModalStore()
