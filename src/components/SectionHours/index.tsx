import React from 'react';
import s from './style.module.scss';
import { HoursForecast } from '../';
import { WeatherData } from '../../consts/types.ts';

const SectionHours = ({ weather }: Props) => {
  return (
    <div className={s.hWrapper}>
      <div className={s.hTitle}>Hourly Forecast</div>
      <div className={s.hSWrapper}>
        {weather.hourly.time.map((item, index) => {
          return index <= 24 && index % 3 == 0 ? (
            <HoursForecast
              timestamp={item}
              timezone={weather.timezone}
              weathercode={weather.hourly.weathercode[index]}
              temp={[
                weather.hourly.apparent_temperature[index],
                weather.hourly.temperature_2m[index]
              ]}
              temp_unit={weather.hourly_units.temperature_2m}
              wind_speed={weather.hourly.windspeed_10m[index]}
              wind_speed_unit={weather.hourly_units.windspeed_10m}
              wind_direction={weather.hourly.winddirection_180m[index]}
              key={index}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default SectionHours;

type Props = {
  weather: WeatherData;
};
