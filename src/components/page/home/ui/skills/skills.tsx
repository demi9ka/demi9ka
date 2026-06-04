import { SectionTitle } from '@/shared/ui/section-title'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/shared/ui/tabs'
import { Ellipsis, PaintBucket, Server } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Panel } from './ui/panel'
import { SKILLS } from './constants'
import { observer } from 'mobx-react-lite'
import { skillsStore, type TabType } from '@/store/skills-store'

export const Skills = observer(() => {
  const { t } = useTranslation()
  const { activeTab, setActiveTab } = skillsStore

  return (
    <>
      <SectionTitle title={t('home.skills.title')} id="skills" style={{ scrollMarginTop: 30 }} />
      <Tabs value={activeTab} onValueChange={v => setActiveTab(v as TabType)}>
        <TabsList>
          <TabsTrigger value="frontend">
            <PaintBucket size={15} />
            {t('home.skills.tabs.frontend')}
          </TabsTrigger>
          <TabsTrigger value="backend">
            <Server size={15} />
            {t('home.skills.tabs.backend')}
          </TabsTrigger>
          <TabsTrigger value="other">
            <Ellipsis size={15} />
            {t('home.skills.tabs.other')}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="frontend">
          <Panel data={SKILLS.frontend} />
        </TabsContent>
        <TabsContent value="backend">
          <Panel data={SKILLS.backend} />
        </TabsContent>
        <TabsContent value="other">
          <Panel data={SKILLS.other} />
        </TabsContent>
      </Tabs>
    </>
  )
})
