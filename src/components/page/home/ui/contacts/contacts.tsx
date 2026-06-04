import { SectionTitle } from '@/shared/ui/section-title'
import { AnimatedComponent } from '@/shared/ui/animated-component'
import { useTranslation } from 'react-i18next'
import { CONTACT_DATA } from './constants'
import { ExternalLink } from 'lucide-react'

export const Contacts = () => {
  const { t } = useTranslation()

  return (
    <div>
      <SectionTitle title={t('home.contact.title')} id='contact' index="03" style={{ scrollMargin: 50 }} />
      <div className="flex flex-col sm:flex-row gap-3">
        {CONTACT_DATA.map(({ url, Icon, label, handle }, i) => (
          <AnimatedComponent key={i} animationType='slideUp' duration={0.5} delay={0.1 + i * 0.1} once={true} value={12} className="flex-1">
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className="group relative flex flex-col p-5 border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-indigo-500/50 transition-all duration-200 overflow-hidden block"
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-indigo-600/40 group-hover:bg-indigo-500 transition-colors duration-200" />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              <div className="flex items-start justify-between mb-4 pl-3">
                <Icon size={22} className="text-[hsl(var(--muted-foreground))] group-hover:text-indigo-400 transition-colors duration-200" />
                <ExternalLink size={12} className="text-[hsl(var(--muted-foreground))] opacity-0 group-hover:opacity-60 transition-all duration-200" />
              </div>

              <div className="pl-3">
                <div className="font-mono text-xs tracking-[0.2em] uppercase text-[hsl(var(--muted-foreground))] mb-1">
                  {label}
                </div>
                <div className="text-sm text-[hsl(var(--foreground))] font-medium">{handle}</div>
              </div>
            </a>
          </AnimatedComponent>
        ))}
      </div>
    </div>
  )
}
