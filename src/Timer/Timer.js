
import Button from '../Button/Button';
import FormattedTime from '../FormattedTime/FormattedTime';
import styles from './Timer.module.scss';
import { useEffect, useState  } from 'react';

const Timer = () => {

    const [time, setCurrentTime] = useState(0)
    const [timer, setTimer]      = useState(null)
    const start =() => {
        setTimer(setInterval(() => {
          setCurrentTime(time => time + 4);
        }, 1));
        clearInterval(timer);
      }
    const stop =() => {
        clearInterval(timer);
    }
    const reset = () => {
        setCurrentTime(0)
    }

    useEffect(() => {
        return () => {
            if(timer) clearInterval(timer);
        };
    }, []);

    return (
        <div className={styles.center}>
        <FormattedTime time={time}/>
        <Button onClick={start}>Start</Button>
        <Button onClick={stop}>Stop</Button>
        <Button onClick={reset}>Reset</Button>
        </div>
      )
};

export default Timer;