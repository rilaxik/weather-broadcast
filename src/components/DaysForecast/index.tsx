import React from 'react';
import { DateTime } from 'luxon';
import { getIcon } from '../../api';

import s from './style.module.scss';

const DaysForecast = ({
  weathercode,
  temp_min,
  temp_max,
  temp_unit,
  timestamp,
  timezone
}: Props) => {
  return (
    <div className={s.daysWrapper}>
      <div className={s.daysIcon}>
        <img src={getIcon(weathercode, 1)} alt="" />
      </div>
      <div className={s.daysTemperature}>
        {Math.round(temp_min)}
        {temp_unit} - {Math.round(temp_max)}
        {temp_unit}
      </div>
      <div className={s.daysDate}>
        {DateTime.fromSeconds(timestamp).setZone(timezone).toLocaleString(DateTime.DATE_MED)}
      </div>
    </div>
  );
};

export default DaysForecast;

type Props = {
  weathercode: number;
  temp_min: number;
  temp_max: number;
  temp_unit: string;
  timestamp: number;
  timezone: string;
};
