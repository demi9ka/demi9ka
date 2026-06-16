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
        'fixed bottom-5 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] transition-all duration-300 hover:border-[hsl(0_0%_32%)] hover:text-[hsl(var(--foreground))]',
        scrollPosition.y > 10
          ? 'right-5 opacity-100'
          : '-right-16 opacity-0 pointer-events-none'
      )}
    >
      <ArrowUp size={14} />
    </button>
  )
})
