import { Container } from '@/shared/ui/container'
import { AnimatedComponent } from '@/shared/ui/animated-component'
import { useTranslation } from 'react-i18next'
import { CONTACT_DATA } from './constants'
import { ArrowUpRight } from 'lucide-react'

export const Contacts = () => {
  const { t } = useTranslation()

  return (
    <section id="contact" className="border-t border-[hsl(var(--border))] py-24 sm:py-28" style={{ scrollMarginTop: 60 }}>
      <Container className="text-center">
        <AnimatedComponent animationType="slideUp" duration={0.6} value={16}>
          <div className="mb-3 font-mono text-xs text-[hsl(var(--muted-foreground))]">03 / {t('home.contact.label')}</div>
          <h2
            className="font-semibold tracking-[-0.03em] text-[hsl(var(--foreground))]"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.25rem)' }}
          >
            {t('home.contact.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-sm text-[hsl(var(--muted-foreground))] sm:text-base">
            {t('home.contact.subtitle')}
          </p>
        </AnimatedComponent>

        <div className="mx-auto mt-10 flex max-w-[460px] flex-col gap-3">
          {CONTACT_DATA.map(({ url, Icon, label, handle }, i) => (
            <AnimatedComponent key={i} animationType="slideUp" duration={0.5} delay={0.1 + i * 0.08} once value={12}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-3.5 text-left transition-colors duration-150 hover:border-[hsl(0_0%_30%)] hover:bg-[hsl(var(--secondary))]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] transition-colors group-hover:text-[hsl(var(--foreground))]">
                  <Icon size={16} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-[hsl(var(--muted-foreground))]">{label}</span>
                  <span className="block truncate text-sm font-medium text-[hsl(var(--foreground))]">{handle}</span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-[hsl(var(--muted-foreground))] transition-all duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(var(--foreground))]"
                />
              </a>
            </AnimatedComponent>
          ))}
        </div>
      </Container>
    </section>
  )
}
