import { i18next } from '@/feature/locale'
import { makeAutoObservable } from 'mobx'

export type LanguageType = 'ru' | 'en'

class LanguageStore {
  language: LanguageType = 'en'

  constructor() {
    makeAutoObservable(this)
    this.loadLanguage()
  }

  loadLanguage = () => {
    this.setLanguage((localStorage.getItem('language') as LanguageType) || 'ru')
  }

  setLanguage = (language: LanguageType) => {
    this.language = language
    localStorage.setItem('language', language)
    i18next.changeLanguage(language)
  }
}

export const languageStore = new LanguageStore()
