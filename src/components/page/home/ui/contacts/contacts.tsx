import { SectionTitle } from '@/shared/ui/section-title'
import { Flex, Group, Text } from '@mantine/core'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { CONTACT_DATA } from './constants'

export const Contacts = () => {
  const { t } = useTranslation()

  const onOpenLink = (url: string) => {
    window.open(url, '_blank')
  }

  const mappedData = useMemo(() => {
    return CONTACT_DATA.map(({ url, Icon, label, handle }, i) => (
      <Flex
        key={i}
        direction='column'
        align='center'
        gap={4}
        py={20}
        px={12}
        bg={'gray.0'}
        style={{
          cursor: 'pointer',
          border: '1px solid var(--mantine-color-gray-3)',
          borderRadius: 8,
          flex: 1,
          transition: 'border-color 0.15s, background 0.15s',
        }}
        onClick={() => onOpenLink(url)}
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
      </Flex>
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
