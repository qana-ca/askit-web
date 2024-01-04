// import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"
import './styles/index.css'
import { RootPage } from './pages/root.tsx'
import { JoinGame } from './pages/join-game/join-game.tsx'
import { CreateGame } from './pages/create-game/create-game.tsx'
import { SocketProvider } from './lib/socket-provider.tsx'
import { ThemeProvider } from './components/theme/theme-provider.tsx'
import { MenuLayout } from './menu/menu-layout.tsx'
import { PAGES } from './pages/pages.ts'

const router = createBrowserRouter([
    {
        path: PAGES.MENU,
        element: <MenuLayout />,
        children: [
            {
                path: PAGES.MENU,
                element: <RootPage />
            },
            {
                path: PAGES.MENU_JOIN_GAME,
                element: <JoinGame />
            },
            {
                path: PAGES.MENU_CREATE_GAME,
                element: <CreateGame />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SocketProvider>
            <>
                <RouterProvider router={router} />
                <Toaster />
            </>
        </SocketProvider>
    </ThemeProvider>,
)
