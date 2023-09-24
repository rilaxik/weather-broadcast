import React from 'react';
import s from './style.module.scss';
import { INFO } from '../../consts/types.ts';
import { average } from '../../consts/functions.ts';
import { iconHumidity, iconPressure, iconUV, iconWind } from '../../assets';

const DetailedInfo = ({ v, value, unit }: Props) => {
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
        {typeof value === 'number' ? value : average(...value)}
        {unit}
      </div>
      <div className={s.dLabel}>{v}</div>
    </div>
  );
};

export default DetailedInfo;

type Props = {
  v: INFO;
  value: number[] | number;
  unit: string;
};
