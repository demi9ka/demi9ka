import { scrollPositionStore } from '@/store/scroll-postoion-store'
import { ArrowUp } from 'lucide-react'
import { observer } from 'mobx-react-lite'
import { cn } from '@/shared/ui/lib/utils'

export const ScrollToTop = observer(() => {
  const { goToTop, scrollPosition } = scrollPositionStore

  return (
    <button
      onClick={goToTop}
      className={cn(
        'fixed bottom-5 z-10 w-10 h-10 rounded-full bg-white border border-border shadow-md flex items-center justify-center transition-all duration-200 hover:bg-indigo-50 hover:border-indigo-300 cursor-pointer',
        scrollPosition.y > 10 ? 'right-5 opacity-80' : '-right-16 opacity-0 pointer-events-none'
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} className="text-indigo-600" />
    </button>
  )
})
