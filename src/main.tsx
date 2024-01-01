// import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"
import './styles/index.css'
import { RootPage } from './pages/root.tsx'
import { JoinGame } from './pages/join-game/join-game.tsx'
import { CreateGame } from './pages/create-game/create-game.tsx'
import { SocketProvider } from './socket-provider.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />
    },
    {
        path: '/join-game',
        element: <JoinGame />
    },
    {
        path: '/create-game',
        element: <CreateGame />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <SocketProvider>
            <>
                <RouterProvider router={router} />
                <Toaster />
            </>
        </SocketProvider>
    </>,
)
