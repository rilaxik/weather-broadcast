import React from 'react';
import { DateTime } from 'luxon';
import s from './style.module.scss';

const SectionGeneral = ({ city, timezone }: Props) => {
  const date = DateTime.now().setZone(timezone);

  return (
    <div className={s.generalWrapper}>
      <span className={s.gCity}>{city}</span>
      <div className={s.gDateTime}>
        <div className={s.gTime}>{date.hour + ':' + date.minute}</div>
        <div className={s.gDate}>{date.toFormat('MMMM dd, yyyy')}</div>
      </div>
    </div>
  );
};

export default SectionGeneral;

type Props = {
  city: string;
  timezone: string;
};
