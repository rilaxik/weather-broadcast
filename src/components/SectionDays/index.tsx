import React from 'react';
import s from './style.module.scss';

import { DaysForecast } from '../';

const SectionDays = () => {
  return (
    <div className={s.dsWrapper}>
      <div className={s.dsTitle}>5 Days Forecast</div>
      <DaysForecast />
      <DaysForecast />
      <DaysForecast />
      <DaysForecast />
      <DaysForecast />
    </div>
  );
};

export default SectionDays;
