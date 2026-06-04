import { SiGithub, SiTelegram, SiGmail } from '@icons-pack/react-simple-icons'
import { useTranslation } from 'react-i18next'

const YEAR = new Date().getFullYear()

const LINKS = [
  { Icon: SiGithub, href: 'https://github.com/demi9ka', label: 'GitHub' },
  { Icon: SiTelegram, href: 'https://t.me/demi9ka', label: 'Telegram' },
  { Icon: SiGmail, href: 'mailto:grazz1wmel@gmail.com', label: 'Gmail' },
]

const STACK = ['React', 'TypeScript', 'Tailwind', 'Vite']

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="relative border-t border-[hsl(var(--border))] bg-[hsl(var(--card))] mt-8">
      {/* Top accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-[760px] mx-auto px-4 py-6 sm:py-8">
        {/* Main row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

          {/* Left: brand + copyright */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-[hsl(var(--foreground))]">
                dev.portfolio
              </span>
              <span className="text-[hsl(var(--border))]">·</span>
              <span className="font-mono text-xs text-indigo-500/70">
                {t('home.profile.name')}
              </span>
            </div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-[hsl(var(--muted-foreground))]">
              © {YEAR} — {t('home.profile.post')}
            </p>
          </div>

          {/* Right: social icons */}
          <div className="flex items-center gap-1">
            {LINKS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-8 h-8 border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-150"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row: built with */}
        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-[hsl(var(--border))]">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[hsl(var(--muted-foreground))]">
            built with
          </span>
          <div className="flex items-center gap-1.5">
            {STACK.map((tech, i) => (
              <span
                key={tech}
                className="font-mono text-[10px] text-indigo-400/70"
              >
                {tech}{i < STACK.length - 1 && <span className="text-[hsl(var(--border))] ml-1.5">·</span>}
              </span>
            ))}
          </div>
          <div className="flex-1 h-px bg-[hsl(var(--border))] ml-2 hidden sm:block" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-[hsl(var(--muted-foreground))] hidden sm:inline">
            {YEAR}
          </span>
        </div>
      </div>
    </footer>
  )
}
