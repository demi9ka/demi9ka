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
    return CONTACT_DATA.map(({ url, Icon, label }, i) => (
      <Flex
        key={i}
        direction='column'
        align='center'
        gap={6}
        py={14}
        bg={'gray.0'}
        style={{ cursor: 'pointer', border: '1px solid var(--mantine-color-gray-3)', borderRadius: 8, flex: 1 }}
        onClick={() => onOpenLink(url)}
      >
        <Icon size={24} />
        <Text size='xs' c='dimmed'>
          {label}
        </Text>
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
