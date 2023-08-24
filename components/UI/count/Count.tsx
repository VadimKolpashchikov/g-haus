import React, { useEffect, useState } from 'react';
import styles from "./count.module.scss";
const Count: React.FC = () => {
    const [endTime] = useState<number>(new Date("Mar 15, 2035 00:00:00").getTime());
    const [[hours, mins, secs], setTime] = useState<[number, number, number]>([0, 0, 0]);
    const [timer, setTimer] = useState<boolean>(false);

    useEffect(() => {
        const timeLeft: number = (endTime - new Date().getTime()) / 1000;
        setTime([
            Math.floor((timeLeft / 3600) % 24),
            Math.floor((timeLeft / 60) % 60),
            Math.floor(timeLeft % 60)
        ]);
    }, [timer, endTime]);

    useEffect(() => {
        const timerID: NodeJS.Timeout = setInterval(() => setTimer(!timer), 1000);
        return () => clearInterval(timerID);
    }, [timer]);

    return (
        <div className={styles.count}>
            <span>{hours.toString().padStart(2, '0')}</span>:
            <span>{mins.toString().padStart(2, '0')}</span>:
            <span>{secs.toString().padStart(2, '0')}</span>
        </div>
    );
};

export default Count;