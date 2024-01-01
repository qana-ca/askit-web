import { useEffect, useState } from "react"
import { axiosInstance } from "../../lib/axios"
import { Button } from "@/components/ui/button";

export const JoinGame = () => {
    const [games, setGames] = useState([]);

    const getAvailableGames = async () => {
        return await axiosInstance.get('/lobby-manager').then((res) => {
            return res.data;
        }).catch((err) => {
            throw err;
        })
    }

    useEffect(() => {
        getAvailableGames().then((games) => {
            setGames(games);
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            {games.length === 0 ? <span>Нет доступных игр</span> : <span className="mb-3 font-semibold text-3xl">Доступные игры:</span>}
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                games.map((game: any) => {
                return (
                    <div key={game.id} className="flex flex-col border mb-2 p-4 w-1/3 text-center cursor-pointer">
                        <span className="font-semibold">Название: {game.name}</span>
                        <span className="font-semibold">Код игры: {game.connectionCode}</span>
                        <br />
                        <span>Режим игры: {game.mode}</span>
                        <span>Игроков в лобби: {game.playersCount}/10</span>
                        {/* Кнопка подключится */}
                        <Button className="mt-4">Присоединиться</Button>
                    </div>
                )
            })}
            <span className="mt-4">вы также можете ввести код игры, чтобы присоединиться к ней</span>
            <div className="flex items-center justify-center w-1/3 mt-4">
                <div className="relative">
                    <input type="text" id="code" name="code" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" placeholder="Код игры" />
                </div>
                <button className="ml-3 px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Присоединиться</button>
            </div>
        </div>
    )
}