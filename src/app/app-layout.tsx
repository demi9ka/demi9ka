import { Header } from '@/shared/ui/header'
import { ScrollArea } from '@mantine/core'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <ScrollArea mt={42} w={'100vw'} h={'calc(100svh - 42px)'}>
      <Header />
      <Outlet />
    </ScrollArea>
  )
}
