import { RouterProvider } from 'react-router-dom'
import { createTheme, MantineProvider } from '@mantine/core'
import { HelmetProvider } from 'react-helmet-async'
import { router } from './routing'

import '@/feature/locale'

const theme = createTheme({
  primaryColor: 'blue',
  defaultRadius: 'xl',
  fontFamily: '"Geist Sans", sans-serif'
})

export const App = () => {
  return (
    <HelmetProvider>
      <MantineProvider defaultColorScheme='light' theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </HelmetProvider>
  )
}
