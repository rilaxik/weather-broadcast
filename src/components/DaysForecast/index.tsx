import React from 'react';
import s from './style.module.scss';

const DaysForecast = () => {
  return (
    <div className={s.daysWrapper}>
      <div className={s.daysIcon}>
        <img src="https://placehold.co/64" alt="" />
      </div>
      <div className={s.daysTemperature}>20 C - 20 C</div>
      <div className={s.daysDate}>Friday, 1 Sep</div>
    </div>
  );
};

export default DaysForecast;
