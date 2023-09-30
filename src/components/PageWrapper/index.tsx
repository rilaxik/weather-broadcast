import { useState } from 'react';
import { getLocation, getWeather } from '../../api';
import { CityData, WeatherData } from '../../consts/types.ts';

import s from './style.module.scss';
import {
  Searchbar,
  ChangeLocation,
  SectionGeneral,
  SectionDetailed,
  SectionDays,
  SectionHours,
  CityInfo
} from '../';

const PageWrapper = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>(null);
  const [cityData, setCityData] = useState<CityData>(null);
  const [citiesParsed, setCitiesParsed] = useState<CityData[]>(null);

  return (
    <div className={s.wrapper}>
      {weatherData !== null ? (
        <>
          <ChangeLocation callback={handleChangeLocation} />
          <section className={s.section}>
            <SectionGeneral city={cityData.name} timezone={cityData.timezone} />
            <SectionDetailed weather={weatherData} />
          </section>
          <section className={s.section}>
            <SectionDays weather={weatherData} />
            <SectionHours weather={weatherData} />
          </section>
        </>
      ) : (
        <>
          <Searchbar callback={(val: string) => handleSearch(val)} />
          {citiesParsed !== null
            ? citiesParsed.map((item, index) => {
                return (
                  <CityInfo
                    name={item.name}
                    nameAdm={item.admin1}
                    nameExt={item.admin2}
                    country={item.country}
                    countryCode={item.country_code}
                    population={item.population}
                    callback={() => handleCityChosen(item)}
                    key={index}
                  />
                );
              })
            : null}
        </>
      )}
    </div>
  );

  function handleChangeLocation() {
    setWeatherData(null);
    setCityData(null);
    setCitiesParsed(null);
  }

  async function handleCityChosen(city: CityData) {
    setCityData(city);
    await getWeather(city.latitude, city.longitude)
      .then((data: WeatherData) => {
        setWeatherData(data);
      })
      .catch((reason) => console.log(reason));
  }

  async function handleSearch(val: string) {
    if (val.trim() === '') return;
    await getLocation(val).then((city: { results: CityData[] }) => {
      try {
        setCitiesParsed(city.results);
      } catch (e) {
        console.log("Invalid input provided: api can't find such cities");
      }
    });
  }
};

export default PageWrapper;
