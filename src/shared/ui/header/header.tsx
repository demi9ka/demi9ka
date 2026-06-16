import { LanguageSelect } from './ui/language-select'
import { Container } from '@/shared/ui/container'

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-30 w-full border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur-md">
      <Container size="wide" className="flex h-14 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 select-none">
          <span className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-[hsl(var(--foreground))] text-[10px] font-bold text-[hsl(var(--background))]">
            D
          </span>
          <span className="font-mono text-xs tracking-tight text-[hsl(var(--foreground))]">
            demid<span className="text-[hsl(var(--muted-foreground))]">.dev</span>
          </span>
        </a>
        <LanguageSelect />
      </Container>
    </header>
  )
}
