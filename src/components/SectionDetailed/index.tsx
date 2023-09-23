import React from 'react';
import s from './style.module.scss';

import { DetailedSun, DetailedInfo } from '../';
import { INFO, SUN } from '../../consts/types.ts';

const SectionDetailed = () => {
  return (
    <div className={s.detailedWrapper}>
      <div className={`${s.dBlock} ${s.dTemperature}`}>
        <div className={s.dReal}>24 C</div>
        <div className={s.dFeels}>
          <span>Feels like</span> <span className={s.dTemp}>22 C</span>
        </div>
        <DetailedSun v={SUN.RISE} time={2} />
        <DetailedSun v={SUN.SET} time={2} />
      </div>
      <div className={`${s.dBlock} ${s.dSky}`}>
        <div className={s.dIcon}>
          <img src="https://placehold.co/300" alt="" />
        </div>
        <div className={s.dDesc}>Sunny</div>
      </div>
      <div className={`${s.dBlock} ${s.dInfo}`}>
        <DetailedInfo v={INFO.HUMIDITY} value={41} unit={'%'} label={'Humidity'} />
        <DetailedInfo v={INFO.WIND} value={2} unit={'m/s'} label={'Wind'} />
        <DetailedInfo v={INFO.PRESSURE} value={997} unit={'hPa'} label={'Pressure'} />
        <DetailedInfo v={INFO.UV} value={8} unit={''} label={'UV'} />
      </div>
    </div>
  );
};

export default SectionDetailed;
