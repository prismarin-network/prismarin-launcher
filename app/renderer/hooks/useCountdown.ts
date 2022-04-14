import { useEffect, useState } from 'react';

const useCountdown = (seconds: number) => {
    const [paused, setPaused] = useState(false)
    const [countDown, setCountDown] = useState<number | null>(seconds);

    const resetCountDown = () => {
        setCountDown(null)
        setPaused(true)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (paused) {
                clearInterval(interval)
                return;
            }
            if (countDown === undefined || countDown <= 0) {
                clearInterval(interval)
                setCountDown(60)
                return;
            }
            const nextNumber = countDown - 1
            setCountDown(nextNumber);
        }, 1000);

        return () => clearInterval(interval);
    }, [countDown, paused, seconds]);

    return {countDown, resetCountDown, setPaused};
};

export { useCountdown };
