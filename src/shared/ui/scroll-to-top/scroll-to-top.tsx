import { scrollPositionStore } from '@/store/scroll-postoion-store'
import { ArrowUp } from 'lucide-react'
import { observer } from 'mobx-react-lite'
import { cn } from '@/shared/ui/lib/utils'

export const ScrollToTop = observer(() => {
  const { goToTop, scrollPosition } = scrollPositionStore

  return (
    <button
      onClick={goToTop}
      aria-label="Scroll to top"
      className={cn(
        'fixed bottom-5 z-10 w-9 h-9 border border-[hsl(var(--border))] bg-[hsl(var(--card))] flex items-center justify-center transition-all duration-300 hover:border-indigo-500/60 hover:text-indigo-400 hover:glow-indigo-sm cursor-pointer text-[hsl(var(--muted-foreground))]',
        scrollPosition.y > 10
          ? 'right-5 opacity-100'
          : '-right-16 opacity-0 pointer-events-none'
      )}
    >
      <ArrowUp size={14} />
    </button>
  )
})
