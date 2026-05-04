import { SectionTitle } from '@/shared/ui/section-title'
import { Group, Text } from '@mantine/core'
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
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 12,
          paddingRight: 12,
          background: 'var(--mantine-color-gray-0)',
          cursor: 'pointer',
          border: '1px solid var(--mantine-color-gray-3)',
          borderRadius: 8,
          flex: 1,
          transition: 'border-color 0.15s, background 0.15s',
          textDecoration: 'none',
          color: 'inherit',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.borderColor = 'var(--mantine-color-blue-4)'
          el.style.background = 'var(--mantine-color-blue-0)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.borderColor = 'var(--mantine-color-gray-3)'
          el.style.background = 'var(--mantine-color-gray-0)'
        }}
      >
        <Icon size={28} />
        <Text size='sm' fw={500} mt={4}>{label}</Text>
        <Text size='xs' c='dimmed'>{handle}</Text>
      </a>
    ))
  }, [])

  return (
    <>
      <SectionTitle style={{ scrollMargin: 50 }} title={t('home.contact.title')} id='contact' />
      <Group gap={'xs'} grow align='stretch'>
        {mappedData}
      </Group>
    </>
  )
}
