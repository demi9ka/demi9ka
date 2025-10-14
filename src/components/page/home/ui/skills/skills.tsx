import { SectionTitle } from '@/shared/ui/section-title'
import { Tabs } from '@mantine/core'
import { Ellipsis, PaintBucket, Server } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Panel } from './ui/panel'
import { SKILLS } from './constants'
import { useMediaQuery } from '@mantine/hooks'

export const Skills = () => {
  const { t } = useTranslation()
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <>
      <SectionTitle title={t('home.skills.title')} />
      <Tabs defaultValue='frontend'>
        <Tabs.List grow={isMobile}>
          <Tabs.Tab value='frontend' leftSection={<PaintBucket size={16} />}>
            {t('home.skills.tabs.frontend')}
          </Tabs.Tab>
          <Tabs.Tab value='backend' leftSection={<Server size={16} />}>
            {t('home.skills.tabs.backend')}
          </Tabs.Tab>
          <Tabs.Tab value='other' leftSection={<Ellipsis size={16} />}>
            {t('home.skills.tabs.other')}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value='frontend'>
          <Panel data={SKILLS.frontend} />
        </Tabs.Panel>

        <Tabs.Panel value='backend'>
          <Panel data={SKILLS.backend} />
        </Tabs.Panel>

        <Tabs.Panel value='other'>
          <Panel data={SKILLS.other} />
        </Tabs.Panel>
      </Tabs>
    </>
  )
}
