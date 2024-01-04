import { Button } from "@/components/ui/button";
import { socket } from "@/lib/socket";
import { PAGES } from "@/pages/pages";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const RootButton = ({ children, className, to}: any) => {
    const { pathname } = useLocation();
    console.log(pathname)

    return (
        <Link className="w-full" to={to} tabIndex={-1}>
            <Button className={"w-full h-16 mb-4 " + className} variant={pathname === to ? 'default' : 'secondary'}>
                {children}
            </Button>
        </Link>
    )
}

export const MenuLayout = () => {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true)
        })

        socket.on('disconnect', () => {
            setIsConnected(false)
        })
    }, [])
    return (
        <div className='w-screen h-screen flex bg-gradient-to-tl from-[#000000] to-[#434343]'>
            {/* Header */}
            <div className="left-1/4 absolute h-12 flex items-center w-3/4 px-2 border-b-[2px] border-primary">
                <span>AskIT.space v.{APP_VERSION}</span>
                <span className="ml-auto pr-2">Статус сервера:&nbsp;<span className="text-green-500">Онлайн</span></span>
                <span className="pl-2 border-l-[1px] border-emerald-600">Клиент: {isConnected ? <span className="text-green-500">Подключен</span> : <span className="text-red-500">Отключен</span>}</span>
            </div>
            {/* Left side */}
            <div className="w-1/4 flex flex-col items-center justify-center border-r-[2px] border-primary rounded-br-[60px] px-12">
                <RootButton to={PAGES.MENU} className="mb-32">
                    Главная
                </RootButton>
                <RootButton to={PAGES.MENU_JOIN_GAME} className="mb-4">
                    Присоединиться к игре
                </RootButton>
                <RootButton to={PAGES.MENU_CREATE_GAME} className="mb-32" variant="secondary">
                    Создать игру
                </RootButton>
                <RootButton to={PAGES.HOW_TO_PLAY}>
                    Как играть
                </RootButton>
            </div>
            {/* Right side */}
            <div className="w-2/3 flex flex-col items-center justify-center">
                <Outlet />
            </div>
        </div>
    )
};