import { Home } from '@/components/page/home'
import { createBrowserRouter } from 'react-router'
import { AppLayout } from './app-layout'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        Component: Home,
      },
    ],
  },
])
