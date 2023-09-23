import { useState } from 'react';

import s from './style.module.scss';
import { Searchbar, SectionGeneral, SectionDetailed, SectionDays, SectionHours } from '../';
// import { getWeather } from '../../api/weather.ts';

const PageWrapper = () => {
  const [data, setData] = useState<any>(null);

  return (
    <div className={s.wrapper}>
      <Searchbar callback={(val: string) => handleSearch(val)} />
      {data !== null ? (
        <>
          <section className={s.section}>
            <SectionGeneral />
            <SectionDetailed />
          </section>
          <section className={s.section}>
            <SectionDays />
            <SectionHours />
          </section>
        </>
      ) : null}
    </div>
  );

  async function handleSearch(val: string) {
    console.log(val);
    // await getWeather().then((d) => {
    //   setData(d);
    //   console.log(d);
    // });
  }
};

export default PageWrapper;
