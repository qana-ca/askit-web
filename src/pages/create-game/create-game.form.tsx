import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { createGameScheme } from './create-game.scheme';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { socket } from '@/lib/socket';

/* Function that generates random 8-length string */
function generateRandomName() {
    const words = ['дом', 'дерево', 'река', 'солнце', 'луна', 'звезда', 'цветок', 'трава', 'мяч', 'машина'];

    const sentences = [];
    for (let i = 0; i < 20; i++) {
        const length = Math.floor(Math.random() * 3) + 2;
        const wordsArray = [];
        for (let j = 0; j < length; j++) {
            wordsArray.push(words[Math.floor(Math.random() * words.length)]);
        }
        sentences.push(wordsArray.join(' '));
    }

    // Рандомное число от 0 до 20
    const randomIndex = Math.floor(Math.random() * 20);
    return sentences[randomIndex];
}

function generateConnectionCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export const CreateGameForm = () => {
    const form = useForm<z.infer<typeof createGameScheme>>({
        resolver: zodResolver(createGameScheme),
        defaultValues: {
            name: generateRandomName(),
            mode: 'quiz',
            isPublic: true,
            connectionCode: generateConnectionCode()
        }
    });

    const createGame = async (values: z.infer<typeof createGameScheme>) => {
        console.log(values);
        if (socket.connected) {
            console.log('123');
            socket.emit('client.create_lobby', values);
        } else {
            console.error('Socket is not connected');
        }
    };

    function onSubmit(values: z.infer<typeof createGameScheme>) {
        createGame(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/3 flex flex-col space-y-2">
                <FormField
                    control={form.control}
                    name="connectionCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Код подключения *</FormLabel>
                            <FormControl>
                                <Input required placeholder="Пупупупу" {...field} disabled={true} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Название *</FormLabel>
                            <FormControl>
                                <Input placeholder="Пупупупу" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="mode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Режим игры *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Выберите режим игры" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="quiz">Квиз</SelectItem>
                                    <SelectItem value="one-word">Одно слово</SelectItem>
                                    <SelectItem value="speaking">Разговор</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="isPublic"
                    render={({ field }) => (
                        <div className="!mt-4">
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                <div>
                                    <FormLabel>Публичная игра?</FormLabel>
                                </div>
                                <FormControl>
                                    <Switch className="!mt-1" checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                            </FormItem>
                        </div>
                    )}
                />
                <Button className="!mt-6" type="submit">
                    Создать
                </Button>
            </form>
        </Form>
    );
};
