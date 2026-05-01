import { RouterProvider } from 'react-router-dom'
import { createTheme, MantineProvider } from '@mantine/core'
import { router } from './routing'

import '@/feature/locale'

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'Inter, sans-serif',
})

export const App = () => {
  return (
    <MantineProvider defaultColorScheme='light' theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}
