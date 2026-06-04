import { observer } from 'mobx-react-lite'
import { languageStore } from '@/store/language-store'
import { Button } from '@/shared/ui/button'

const LANGUAGE_NAMES = {
  ru: 'Русский',
  en: 'English'
}

export const LanguageSelect = observer(() => {
  const { language, setLanguage } = languageStore

  const onChangeLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button variant="subtle" size="sm" onClick={onChangeLanguage}>
      {LANGUAGE_NAMES[language]}
    </Button>
  )
})
