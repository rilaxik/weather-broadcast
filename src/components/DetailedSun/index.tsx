import React from 'react';
import { SUN } from '../../consts/types.ts';

import { iconSunset, iconSunrise } from '../../assets';
import s from './style.module.scss';

const DetailedSun = ({ v, time }: Props) => {
  return (
    <div className={s.sunWrapper}>
      <div className={s.icon}>
        <img src={v === SUN.SET ? iconSunset : iconSunrise} alt="" />
      </div>
      <div className={s.data}>
        <div className={s.title}>{v === SUN.SET ? 'Sunset' : 'Sunrise'}</div>
        <div className={s.time}>{time}</div>
      </div>
    </div>
  );
};

export default DetailedSun;

type Props = {
  v: SUN;
  time: string;
};
