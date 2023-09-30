import React from 'react';

import { DateTime } from 'luxon';
import { getIcon } from '../../api';
import { average } from '../../consts/functions.ts';

import { iconWindDir } from '../../assets';
import s from './style.module.scss';

const HoursForecast = ({
  timestamp,
  timezone,
  weathercode,
  temp,
  temp_unit,
  wind_speed,
  wind_speed_unit,
  wind_direction
}: Props) => {
  return (
    <div className={s.hWrapper}>
      <div className={s.hTime}>
        {DateTime.fromSeconds(timestamp).setZone(timezone).toLocaleString(DateTime.TIME_24_SIMPLE)}
      </div>
      <div className={s.hIcon}>
        <img src={getIcon(weathercode, 1)} alt="" />
      </div>
      <div className={s.hValues}>
        {average(...temp)}
        {temp_unit}
      </div>
      <div
        className={s.hIcon}
        style={{
          transform: `rotate(${wind_direction}deg)`
        }}
      >
        <img src={iconWindDir} alt="" />
      </div>
      <div className={s.hValues}>
        {wind_speed}
        {wind_speed_unit}
      </div>
    </div>
  );
};

export default HoursForecast;

type Props = {
  timestamp: number;
  timezone: string;
  weathercode: number;
  temp: number[];
  temp_unit: string;
  wind_speed: number;
  wind_speed_unit: string;
  wind_direction: number;
};
