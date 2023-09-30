import React from 'react';
import s from './style.module.scss';

import { DaysForecast } from '../';
import { WeatherData } from '../../consts/types.ts';

const SectionDays = ({ weather }: Props) => {
  return (
    <div className={s.dsWrapper}>
      <div className={s.dsTitle}>5 Days Forecast</div>
      {weather.daily.time.map((item, index) => {
        return index > 0 ? (
          <DaysForecast
            weathercode={weather.daily.weathercode[index]}
            temp_min={weather.daily.apparent_temperature_min[index]}
            temp_max={weather.daily.apparent_temperature_max[index]}
            temp_unit={weather.daily_units.apparent_temperature_min}
            timestamp={item}
            timezone={weather.timezone}
            key={index}
          />
        ) : null;
      })}
    </div>
  );
};

export default SectionDays;

type Props = {
  weather: WeatherData;
};
