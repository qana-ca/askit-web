import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const RootPage = () => {
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <h1 className="mb-12 text-3xl font-medium">Добро пожаловать!</h1>
            <Link to="/join-game" tabIndex={-1}>
                <Button variant="outline">
                    Присоединиться к игре
                </Button>
            </Link>
            <Link to="/create-game" tabIndex={-1}>
                <Button variant="outline">
                    Создать игру
                </Button>
            </Link>
        </div>
    )
};