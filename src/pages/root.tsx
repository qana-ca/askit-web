import { Link } from "react-router-dom";

export const RootPage = () => {
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <h1 className="mb-12 text-3xl font-medium">Добро пожаловать!</h1>
            <Link to="/join-game" tabIndex={-1}>
                <button className="text-xl w-[460px] bg-emerald-600 text-white hover:bg-emerald-700 transition-colors mb-3 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                    Присоединится к игре
                </button>
            </Link>
            <Link to="/create-game" tabIndex={-1}>
                <button className="text-xl w-[460px] bg-emerald-600 text-white hover:bg-emerald-700 transition-colors py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                    Создать игру
                </button>
            </Link>
        </div>
    )
};