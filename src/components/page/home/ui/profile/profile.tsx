import { Trans, useTranslation } from 'react-i18next'
import { ArrowDown } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { scrollPositionStore } from '@/store/scroll-postoion-store'
import { AnimatedComponent } from '@/shared/ui/animated-component'
import { Container } from '@/shared/ui/container'
import { Button } from '@/shared/ui/button'
import { Statistics } from '../statisticcs'
import { HeroBackground } from './ui/hero-background'
import { Avatar } from './ui/avatar'

export const Profile = () => {
  const { t } = useTranslation()

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (!el || !scrollPositionStore.viewportRef?.current) return
    scrollPositionStore.viewportRef.current.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden border-b border-[hsl(var(--border))]">
      <HeroBackground />

      <Container className="relative py-20 sm:py-28">
        <AnimatedComponent animationType="slideUp" duration={0.6} delay={0.1} value={20}>
          <div className="flex items-center gap-5 sm:gap-6">
            <Avatar src="/avatar.webp" alt={t('home.profile.name')} />
            <div className="min-w-0">
              <h1
                className="font-semibold leading-[1.05] tracking-[-0.03em] text-[hsl(var(--foreground))]"
                style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
              >
                {t('home.profile.name')}
              </h1>
              <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))] sm:text-base">
                {t('home.profile.post')}
              </p>
            </div>
          </div>
        </AnimatedComponent>

        <AnimatedComponent animationType="slideUp" duration={0.6} delay={0.28} value={16}>
          <p className="mt-8 max-w-[620px] text-sm leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-[15px]">
            <Trans i18nKey="home.profile.info" />
          </p>
        </AnimatedComponent>

        <AnimatedComponent animationType="slideUp" duration={0.5} delay={0.38} value={12}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button onClick={scrollToContact} size="lg" className="w-full sm:w-auto">
              {t('home.profile.cta')}
              <ArrowDown size={15} />
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="https://github.com/demi9ka" target="_blank" rel="noopener noreferrer">
                <SiGithub size={15} />
                GitHub
              </a>
            </Button>
          </div>
        </AnimatedComponent>

        <Statistics />
      </Container>
    </section>
  )
}
