import { SectionTitle } from '@/shared/ui/section-title'
import { useTranslation } from 'react-i18next'
import { DATA } from './constants'
import { Card } from './ui/card'
import { useState, useEffect } from 'react'

export const Portfolio = () => {
  const { t } = useTranslation()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const left = DATA.filter((_, i) => i % 2 === 0)
  const right = DATA.filter((_, i) => i % 2 === 1)

  return (
    <div className="pb-8">
      <SectionTitle title={t('home.portfolio.title')} index="04" />
      {isMobile ? (
        <div className="flex flex-col gap-3">
          {DATA.map((el, i) => <Card key={i} {...el} cardIndex={i} />)}
        </div>
      ) : (
        <div className="flex gap-3 items-start">
          <div className="flex-1 flex flex-col gap-3">
            {left.map((el, i) => <Card key={i * 2} {...el} cardIndex={i * 2} />)}
          </div>
          <div className="flex-1 flex flex-col gap-3">
            {right.map((el, i) => <Card key={i * 2 + 1} {...el} cardIndex={i * 2 + 1} />)}
          </div>
        </div>
      )}
    </div>
  )
}
