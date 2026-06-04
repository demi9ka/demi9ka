import { Trans, useTranslation } from 'react-i18next'
import { Mail, ArrowRight } from 'lucide-react'
import { scrollPositionStore } from '@/store/scroll-postoion-store'
import { AnimatedComponent } from '@/shared/ui/animated-component'

export const Profile = () => {
  const { t } = useTranslation()

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (!el || !scrollPositionStore.viewportRef?.current) return
    scrollPositionStore.viewportRef.current.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' })
  }

  return (
    <div className="overflow-x-hidden pt-4">
      {/* Avatar + name layout */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start sm:items-center mb-8">
        {/* Avatar */}
        <AnimatedComponent animationType='zoom' duration={0.7} delay={0.1} value={0.9} className="shrink-0 self-center sm:self-start">
          <div className="relative">
            {/* Decorative corner brackets */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-indigo-500" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-indigo-500" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-indigo-500" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-indigo-500" />
            <img
              src='/avatar.webp'
              alt={t('home.profile.name')}
              className="object-cover grayscale-[15%] contrast-105"
              style={{
                width: 'clamp(120px, 22vw, 180px)',
                height: 'clamp(120px, 22vw, 180px)',
                clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)',
              }}
            />
          </div>
        </AnimatedComponent>

        {/* Name + role */}
        <div className="flex-1 min-w-0">
          <AnimatedComponent animationType='slideRight' duration={0.6} delay={0.15} value={30}>
            <div className="font-mono text-xs tracking-[0.25em] text-indigo-500/70 uppercase mb-2">
              // frontend developer
            </div>
          </AnimatedComponent>

          <AnimatedComponent animationType='slideRight' duration={0.6} delay={0.25} value={30}>
            <h1
              className="font-bold leading-none mb-3 text-[hsl(var(--foreground))]"
              style={{ fontSize: 'clamp(2.2rem, 7vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              {t('home.profile.name')}
            </h1>
          </AnimatedComponent>

          <AnimatedComponent animationType='slideRight' duration={0.6} delay={0.35} value={30}>
            <div className="font-mono text-sm text-[hsl(var(--muted-foreground))] cursor-blink">
              {t('home.profile.post')}
            </div>
          </AnimatedComponent>
        </div>
      </div>

      {/* Bio block */}
      <AnimatedComponent animationType='slideUp' duration={0.6} delay={0.4} value={16}>
        <div className="relative border border-[hsl(var(--border))] p-5 mb-6 bg-[hsl(var(--card))]">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-600 via-indigo-400 to-transparent" />
          <div className="font-mono text-xs text-indigo-500/60 mb-2 uppercase tracking-widest">// about</div>
          <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
            <Trans i18nKey={'home.profile.info'} />
          </p>
        </div>
      </AnimatedComponent>

      {/* CTA */}
      <AnimatedComponent animationType='slideUp' duration={0.5} delay={0.5} value={12}>
        <button
          onClick={scrollToContact}
          className="group flex items-center gap-3 border border-indigo-500/60 bg-indigo-600/10 hover:bg-indigo-600/20 hover:border-indigo-400 px-6 py-3 text-sm font-mono tracking-wider uppercase text-indigo-300 transition-all duration-200 cursor-pointer glow-indigo-sm hover:glow-indigo"
        >
          <Mail size={14} />
          {t('home.profile.cta')}
          <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </AnimatedComponent>
    </div>
  )
}
