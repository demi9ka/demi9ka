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

  if (isMobile) {
    return (
      <>
        <SectionTitle title={t('home.portfolio.title')} />
        <div className="my-2">
          {DATA.map((el, i) => <Card key={i} {...el} />)}
        </div>
      </>
    )
  }

  return (
    <>
      <SectionTitle title={t('home.portfolio.title')} />
      <div className="flex gap-4 my-2 items-start">
        <div className="flex-1">
          {left.map((el, i) => <Card key={i * 2} {...el} />)}
        </div>
        <div className="flex-1">
          {right.map((el, i) => <Card key={i * 2 + 1} {...el} />)}
        </div>
      </div>
    </>
  )
}
