import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { IconLink } from '@/shared/ui/icon-link'
import { FOOTER_LINKS, FOOTER_STACK } from './constants'

const YEAR = new Date().getFullYear()

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-[hsl(var(--border))]">
      <Container size="wide" className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-sm text-[hsl(var(--foreground))]">
            demid<span className="text-[hsl(var(--muted-foreground))]">.dev</span>
          </span>
          <span className="text-xs text-[hsl(var(--muted-foreground))]">
            © {YEAR} {t('home.profile.name')} — {t('home.profile.post')}
          </span>
          <span className="mt-1 font-mono text-[11px] text-[hsl(0_0%_40%)]">
            built with {FOOTER_STACK.join(' · ')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {FOOTER_LINKS.map(({ Icon, href, label }) => (
            <IconLink key={label} href={href} label={label}>
              <Icon size={15} />
            </IconLink>
          ))}
        </div>
      </Container>
    </footer>
  )
}
