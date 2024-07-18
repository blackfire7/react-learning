import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {

    let timer = useRef(0);
    const dialog = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const handleStart = () => {
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);
    }

    const handleStop = () => {
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal targetTime={targetTime} result="lost" ref={dialog}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Timer is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}
