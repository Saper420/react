import React from 'react';
import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
    const HH = ("0" + Math.floor((time / 3600000))).slice(-2);
    const mm = ("0" + Math.floor(time / 60000)%60).slice(-2);
    const ss = ("0" +(((time % 60000) / 1000)%60).toFixed(0)).slice(-2);
    const ms = ("0" +((time % 60000)).toFixed(0)).slice(-3);
   return <div className={styles.timer}><span>{HH}:{mm}:{ss}.{ms}</span></div>
};

export default FormattedTime;