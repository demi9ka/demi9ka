import { observer } from 'mobx-react-lite'
import { languageStore } from '@/store/language-store'

const LANGUAGE_NAMES = { ru: 'RU', en: 'EN' }

export const LanguageSelect = observer(() => {
  const { language, setLanguage } = languageStore

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
      className="font-mono text-xs tracking-[0.2em] uppercase text-[hsl(var(--muted-foreground))] hover:text-indigo-400 transition-colors duration-150 cursor-pointer border border-[hsl(var(--border))] hover:border-indigo-500/50 px-3 py-1"
    >
      {LANGUAGE_NAMES[language]}
    </button>
  )
})
