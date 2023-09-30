import React from 'react';
import { DateTime } from 'luxon';
import { INFO, SUN, WeatherData } from '../../consts/types.ts';
import { getDescription, getIcon } from '../../api';
import { average } from '../../consts/functions.ts';

import { DetailedSun, DetailedInfo } from '../';
import s from './style.module.scss';

const SectionDetailed = ({ weather }: Props) => {
  return (
    <div className={s.detailedWrapper}>
      <div className={`${s.dBlock} ${s.dTemperature}`}>
        <div className={s.dReal}>
          {Math.round(weather.current_weather.temperature) +
            weather.daily_units.apparent_temperature_min}
        </div>
        <div className={s.dFeels}>
          <span>Feels like </span>
          <span className={s.dTemp}>
            {average(
              ...weather.daily.apparent_temperature_min,
              ...weather.daily.apparent_temperature_max
            ) + weather.daily_units.apparent_temperature_min}
          </span>
        </div>
        <DetailedSun
          v={SUN.RISE}
          time={DateTime.fromSeconds(weather.daily.sunrise[0])
            .setZone(weather.timezone)
            .toLocaleString(DateTime.TIME_24_SIMPLE)}
        />
        <DetailedSun
          v={SUN.SET}
          time={DateTime.fromSeconds(weather.daily.sunset[0])
            .setZone(weather.timezone)
            .toLocaleString(DateTime.TIME_24_SIMPLE)}
        />
      </div>
      <div className={`${s.dBlock} ${s.dSky}`}>
        <div className={s.dIcon}>
          <img
            src={getIcon(weather.current_weather.weathercode, weather.current_weather.is_day)}
            alt=""
          />
        </div>
        <div className={s.dDesc}>
          {getDescription(weather.current_weather.weathercode, weather.current_weather.is_day)}
        </div>
      </div>
      <div className={`${s.dBlock} ${s.dInfo}`}>
        <DetailedInfo
          v={INFO.HUMIDITY}
          value={weather.hourly.relativehumidity_2m}
          unit={weather.hourly_units.relativehumidity_2m}
        />
        <DetailedInfo
          v={INFO.WIND}
          value={weather.daily.windspeed_10m_max[0]}
          unit={weather.daily_units.windspeed_10m_max}
        />
        <DetailedInfo v={INFO.PRESSURE} value={weather.hourly.surface_pressure} unit={'hPa'} />
        <DetailedInfo
          v={INFO.UV}
          value={weather.daily.uv_index_max[0]}
          unit={weather.daily_units.uv_index_max[0]}
        />
      </div>
    </div>
  );
};

export default SectionDetailed;

type Props = {
  weather: WeatherData;
};
