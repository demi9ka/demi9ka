import { SectionTitle } from '@/shared/ui/section-title'
import { Group } from '@mantine/core'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { CONTACT_DATA } from './constants'

export const Contacts = () => {
  const { t } = useTranslation()

  const onOpenLink = (url: string) => {
    window.open(url, '_blank')
  }

  const mappedData = useMemo(() => {
    return CONTACT_DATA.map(({ url, Icon }, i) => (
      <Group
        key={i}
        justify='center'
        py={10}
        bg={'dark.6'}
        style={{ cursor: 'pointer', border: '1px solid var(--mantine-color-dark-4)', borderRadius: 8 }}
        onClick={() => onOpenLink(url)}
      >
        <Icon size={26} />
      </Group>
    ))
  }, [])

  return (
    <>
      <SectionTitle title={t('home.contact.title')} />
      <Group gap={'xs'} grow>
        {mappedData}
      </Group>
    </>
  )
}
