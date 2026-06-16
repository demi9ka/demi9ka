import { SiGithub } from '@icons-pack/react-simple-icons'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type Props = {
  githubRepositoryUrl?: string
  siteUrl?: string
}

const linkClass = 'transition-colors hover:text-[hsl(var(--foreground))]'

export const ProjectLinks = ({ githubRepositoryUrl, siteUrl }: Props) => {
  const { t } = useTranslation()

  if (!githubRepositoryUrl && !siteUrl) return null

  return (
    <div className="mt-1 flex shrink-0 items-center gap-3 text-[hsl(var(--muted-foreground))]">
      {Boolean(githubRepositoryUrl) && (
        <a
          href={githubRepositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('home.portfolio.open-github')}
          className={linkClass}
        >
          <SiGithub size={16} />
        </a>
      )}
      {Boolean(siteUrl) && (
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('home.portfolio.open-link')}
          className={linkClass}
        >
          <ArrowUpRight size={17} />
        </a>
      )}
    </div>
  )
}
