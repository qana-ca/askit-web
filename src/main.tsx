import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import { RootPage } from './pages/root.tsx'
import { JoinGame } from './pages/join-game/join-game.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />
    },
    {
        path: '/join-game',
        element: <JoinGame />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
