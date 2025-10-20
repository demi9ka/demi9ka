import { observer } from 'mobx-react-lite'
import { languageStore } from '@/store/language-store'
import { Button, Flex } from '@mantine/core'

const LANGUAGE_NAMES = {
  ru: 'Русский',
  en: 'English'
}

export const LanguageSelect = observer(() => {
  const { language, setLanguage } = languageStore

  const onChangeLanguage = () => {
    setLanguage(language == 'en' ? 'ru' : 'en')
  }

  return (
    <Flex align={'center'} gap={8}>
      <Button size='xs' onClick={onChangeLanguage} variant={'subtle'}>
        {LANGUAGE_NAMES[language]}
      </Button>
    </Flex>
  )
})
