import { RouterProvider } from 'react-router-dom'
import { createTheme, MantineProvider } from '@mantine/core'
import { router } from './routing'

import '@/feature/locale'

const theme = createTheme({
  primaryColor: 'violet'
})

export const App = () => {
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}
