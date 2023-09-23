import React from 'react';
import s from './style.module.scss';

const HoursForecast = () => {
  return (
    <div className={s.hWrapper}>
      <div className={s.hTime}>12:00</div>
      <div className={s.hIcon}>
        <img src="https://placehold.co/64" alt="" />
      </div>
      <div className={s.hValues}>27 C</div>
      <div className={s.hIcon}>
        <img src="https://placehold.co/64" alt="" />
      </div>
      <div className={s.hValues}>2 m/s</div>
    </div>
  );
};

export default HoursForecast;
