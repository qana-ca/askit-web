import { useEffect } from "react"
import { socket } from "./lib/socket"
import { toast } from "sonner"

export const SocketProvider = ({ children }: any) => {
    useEffect(() => {
        socket.connect()
        socket.on("connect", () => {
            toast.success('Connected to game server!')
        })

        socket.on('server.game_message', (data) => {
            if (data.message) {
                toast.success(data.message)
            }
        })
        
        // On disconnect
        socket.on('disconnect', () => {
            toast.error('Disconnected from game server!')
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}
