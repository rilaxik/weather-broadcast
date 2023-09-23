import React from 'react';
import s from './style.module.scss';
import { SUN } from '../../consts/types.ts';
import { iconSunset, iconSunrise } from '../../assets';

const DetailedSun = ({ v, time }: Props) => {
  return (
    <div className={s.sunWrapper}>
      <div className={s.icon}>
        <img src={v === SUN.SET ? iconSunset : iconSunrise} alt="" />
      </div>
      <div className={s.data}>
        <div className={s.title}>{v === SUN.SET ? 'Sunset' : 'Sunrise'}</div>
        <div className={s.time}>06:37</div>
      </div>
    </div>
  );
};

export default DetailedSun;

type Props = {
  v: SUN;
  time: number;
};
