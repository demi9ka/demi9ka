import { SectionTitle } from '@/shared/ui/section-title'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { CONTACT_DATA } from './constants'

export const Contacts = () => {
  const { t } = useTranslation()

  const mappedData = useMemo(() => {
    return CONTACT_DATA.map(({ url, Icon, label, handle }, i) => (
      <a
        key={i}
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className="flex flex-col items-center gap-1 py-5 px-3 bg-muted border border-border rounded-lg flex-1 transition-all duration-150 hover:border-indigo-300 hover:bg-indigo-50/40 cursor-pointer no-underline"
      >
        <Icon size={26} className="text-foreground" />
        <span className="text-sm font-medium mt-1 text-foreground">{label}</span>
        <span className="text-xs text-muted-foreground">{handle}</span>
      </a>
    ))
  }, [])

  return (
    <>
      <SectionTitle style={{ scrollMargin: 50 }} title={t('home.contact.title')} id='contact' />
      <div className="flex gap-2 items-stretch">
        {mappedData}
      </div>
    </>
  )
}
