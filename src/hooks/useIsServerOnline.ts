import { useEffect, useState } from 'react';

export const useIsServerOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const onlineCheckerInterval = setInterval(() => {
            fetch('https://www.google.com/', {
                mode: 'no-cors',
                method: 'HEAD'
            })
                .then(() => {
                    setIsOnline(true);
                })
                .catch(() => {
                    setIsOnline(false);
                });
        });

        return () => {
            clearInterval(onlineCheckerInterval);
        };
    }, []);

    return isOnline;
};
