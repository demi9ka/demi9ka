import { useTranslation } from 'react-i18next'
import { Helmet as HelmetComponent } from 'react-helmet'

export const Helmet = () => {
  const { t } = useTranslation()

  return (
    <HelmetComponent>
      <title>{t('head.title')}</title>
      <meta name="description" content={t('head.description')} />
    </HelmetComponent>
  )
}
