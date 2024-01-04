import { Button } from "@/components/ui/button";
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
    return (
        <div className='w-screen h-screen flex bg-gradient-to-tl from-[#000000] to-[#434343]'>
            <div className="w-1/3 flex flex-col items-center justify-center border-r-[2px] border-primary rounded-r-[60px] px-12">
                <RootButton to="/join-game" className="w-full h-16 mb-4">
                    Присоединиться к игре
                </RootButton>
                <RootButton to="/create-game" className="w-full h-16 mb-32" variant="secondary">
                    Создать игру
                </RootButton>
                <RootButton to="/rules" className="w-full h-16">
                    Правила
                </RootButton>
            </div>
            <div className="w-2/3 flex flex-col items-center justify-center">
                <Outlet />
            </div>
        </div>
    )
};