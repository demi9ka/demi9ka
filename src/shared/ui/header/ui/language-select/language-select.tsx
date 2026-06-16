import { observer } from 'mobx-react-lite'
import { languageStore } from '@/store/language-store'

const LANGUAGE_NAMES = { ru: 'RU', en: 'EN' }

export const LanguageSelect = observer(() => {
  const { language, setLanguage } = languageStore

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
      className="cursor-pointer rounded-md border border-[hsl(var(--border))] px-2.5 py-1 font-mono text-xs text-[hsl(var(--muted-foreground))] transition-colors duration-150 hover:border-[hsl(0_0%_32%)] hover:text-[hsl(var(--foreground))]"
    >
      {LANGUAGE_NAMES[language]}
    </button>
  )
})
