import React from 'react';
import s from './style.module.scss';
import { INFO } from '../../consts/types.ts';
import { iconHumidity, iconPressure, iconUV, iconWind } from '../../assets';

const DetailedInfo = ({ v, value, unit, label }: Props) => {
  return (
    <div className={s.dInfoWrapper}>
      <div className={s.dIcon}>
        <img
          src={
            v === INFO.HUMIDITY
              ? iconHumidity
              : v === INFO.WIND
              ? iconWind
              : v === INFO.PRESSURE
              ? iconPressure
              : iconUV
          }
          alt=""
        />
      </div>
      <div className={s.dValue}>
        {value}
        {unit}
      </div>
      <div className={s.dLabel}>{label}</div>
    </div>
  );
};

export default DetailedInfo;

type Props = {
  v: INFO;
  value: number;
  unit: string;
  label: string;
};
