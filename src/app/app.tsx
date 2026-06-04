import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { router } from './routing'
import { TooltipProvider } from '@/shared/ui/tooltip'

import '@/feature/locale'

export const App = () => {
  return (
    <HelmetProvider>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </HelmetProvider>
  )
}
