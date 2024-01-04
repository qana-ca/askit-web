import { useEffect } from "react"
import { socket } from "./lib/socket"
import { toast } from "sonner"

export const SocketProvider = ({ children }: any) => {
    useEffect(() => {
        socket.connect()
        socket.on("connect", () => {
            toast.success('Вы успешно подключены к серверу игры.')
        })

        socket.on('server.game_message', (data) => {
            if (data.message) {
                toast.success(data.message)
            }
        })
        
        // On disconnect
        socket.on('disconnect', () => {
            toast.error('Произошла ошибка. Отключение от сервера.')
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
