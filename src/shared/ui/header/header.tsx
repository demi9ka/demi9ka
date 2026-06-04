import { CodeIcon } from 'lucide-react'
import { LanguageSelect } from './ui/language-select'
import { AnimatedComponent } from '../animated-component'

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-30 bg-[hsl(var(--background))]/95 backdrop-blur-md border-b border-[hsl(var(--border))] transition-all duration-200">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      <div className="max-w-[1400px] mx-auto px-5 py-3 flex items-center justify-between">
        <AnimatedComponent animationType='slideRight' duration={0.5} delay={0.2} once={false} value={10}>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-7 h-7 bg-indigo-600 border border-indigo-500/50 glow-indigo-sm cursor-default clip-notch-sm">
              <CodeIcon strokeWidth={2.5} size={14} className="text-white" />
            </div>
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[hsl(var(--muted-foreground))]">
              dev.portfolio
            </span>
          </div>
        </AnimatedComponent>
        <LanguageSelect />
      </div>
    </div>
  )
}
