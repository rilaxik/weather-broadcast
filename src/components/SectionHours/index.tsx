import React from 'react';
import s from './style.module.scss';
import { HoursForecast } from '../';

const SectionHours = () => {
  return (
    <div className={s.hWrapper}>
      <div className={s.hTitle}>Hourly Forecast</div>
      <div className={s.hSWrapper}>
        <HoursForecast />
        <HoursForecast />
        <HoursForecast />
        <HoursForecast />
        <HoursForecast />
        <HoursForecast />
        <HoursForecast />
        <HoursForecast />
      </div>
    </div>
  );
};

export default SectionHours;
