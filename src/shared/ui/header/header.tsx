import { CodeIcon } from 'lucide-react'
import { LanguageSelect } from './ui/language-select'
import { AnimatedComponent } from '../animated-component'

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-30 bg-white/90 backdrop-blur-sm border-b border-border shadow-sm transition-all duration-200">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">
        <AnimatedComponent animationType='slideRight' duration={0.5} delay={0.2} once={false} value={10}>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 cursor-default">
            <CodeIcon strokeWidth={2.5} size={16} className="text-white" />
          </div>
        </AnimatedComponent>
        <LanguageSelect />
      </div>
    </div>
  )
}
