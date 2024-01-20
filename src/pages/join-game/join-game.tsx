import { fetcher } from '../../lib/axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PAGES } from '@/constants';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

export const JoinGame = () => {
    const { data: games, error, isLoading } = useSWR('/lobby-manager', fetcher);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            {isLoading && <span>Загрузка...</span>}
            {error && <span>Ошибка загрузки</span>}
            {games?.length > 0 ? (
                <span className="mb-3 font-semibold text-3xl">Доступные игры:</span>
            ) : (
                <span>Нет доступных игр</span>
            )}
            {games?.map((game: any) => {
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
                );
            })}
            <span className="mt-4">вы также можете ввести код игры, чтобы присоединиться к ней</span>
            <div className="flex items-center justify-center w-1/3 mt-4">
                <Input placeholder="Код игры" className="mr-2" />
                <Button variant="secondary">Присоединиться</Button>
            </div>
            {/* Или создать свою */}
            <Link to={PAGES.createGame.path} className="mt-6" tabIndex={-1}>
                <Button variant="secondary">Создать свою игру</Button>
            </Link>
        </div>
    );
};
