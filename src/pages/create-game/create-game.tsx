import { CreateGameForm } from "./create-game.form"

export const CreateGame = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold mb-12">Создание игры</h1>
            <CreateGameForm />
        </div>
    )
}