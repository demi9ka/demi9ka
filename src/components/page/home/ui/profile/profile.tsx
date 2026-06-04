import { Trans, useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'
import { scrollPositionStore } from '@/store/scroll-postoion-store'
import { AnimatedComponent } from '@/shared/ui/animated-component'
import { Button } from '@/shared/ui/button'
import { Badge } from '@/shared/ui/badge'

export const Profile = () => {
  const { t } = useTranslation()

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (!el || !scrollPositionStore.viewportRef?.current) return
    const viewport = scrollPositionStore.viewportRef.current
    const offsetTop = el.offsetTop
    viewport.scrollTo({ top: offsetTop - 60, behavior: 'smooth' })
  }

  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-center mb-5 sm:mb-7">
        <AnimatedComponent animationType='zoom' duration={0.6} delay={0.1} value={0.85}>
          <img
            src='/avatar.webp'
            alt={t('home.profile.name')}
            className="rounded-full object-cover"
            style={{ width: 'clamp(130px, 28vw, 220px)', height: 'clamp(130px, 28vw, 220px)' }}
          />
        </AnimatedComponent>
      </div>

      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <AnimatedComponent animationType='slideRight' duration={0.5} delay={0.2} value={30}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {t('home.profile.name')}
          </h2>
        </AnimatedComponent>

        <AnimatedComponent animationType='slideLeft' duration={0.5} delay={0.3} value={30}>
          <Badge variant="light" className="mt-2 sm:mt-3 text-sm italic font-normal">
            {t('home.profile.post')}
          </Badge>
        </AnimatedComponent>
      </div>

      <blockquote className="border-l-4 border-indigo-400 pl-6 py-4 text-muted-foreground leading-relaxed bg-indigo-50/50 rounded-r-lg">
        <p className="text-sm sm:text-base">
          <Trans i18nKey={'home.profile.info'} />
        </p>
      </blockquote>

      <div className="flex justify-center mt-6">
        <Button onClick={scrollToContact} size="lg" className="gap-2">
          <Mail size={16} />
          {t('home.profile.cta')}
        </Button>
      </div>
    </div>
  )
}
