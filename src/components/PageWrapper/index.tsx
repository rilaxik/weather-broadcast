import { useState } from 'react';

import s from './style.module.scss';
import { Searchbar, SectionGeneral, SectionDetailed, SectionDays, SectionHours } from '../';
import { getWeather } from '../../api/weather.ts';
import { getLocation } from '../../api/location.ts';
import { CityData, WeatherData } from '../../consts/types.ts';

const PageWrapper = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>(null);
  const [cityData, setCityData] = useState<CityData>(null);

  return (
    <div className={s.wrapper}>
      <Searchbar callback={(val: string) => handleSearch(val)} />
      {weatherData !== null ? (
        <>
          <section className={s.section}>
            <SectionGeneral city={cityData.name} timezone={cityData.timezone} />
            <SectionDetailed weather={weatherData} />
          </section>
          <section className={s.section}>
            <SectionDays weather={weatherData} />
            <SectionHours weather={weatherData} />
          </section>
        </>
      ) : null}
    </div>
  );

  async function handleSearch(val: string) {
    await getLocation()
      .then(async (city: { results: CityData[] }) => {
        setCityData(city.results[0]);
        // console.log(city.results[0]);

        return city.results[0];
      })
      .then(async (c: CityData) => {
        await getWeather(c.latitude, c.longitude).then((data: WeatherData) => {
          setWeatherData(data);
          console.log(data);
        });
      });
  }
};

export default PageWrapper;
