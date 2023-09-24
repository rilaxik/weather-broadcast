import React from 'react';
import s from './style.module.scss';

const SectionGeneral = ({ city, timezone }: Props) => {
  const date = new Date();
  console.log(date.getTime());
  return (
    <div className={s.generalWrapper}>
      <span className={s.gCity}>{city}</span>
      <div className={s.gDateTime}>
        <div className={s.gTime}>{date.getHours() + ':' + date.getMinutes()}</div>
        <div className={s.gDate}>
          {date.toLocaleString('default', { month: 'long' }) +
            ' ' +
            date.getDate() +
            ', ' +
            date.getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default SectionGeneral;

type Props = {
  city: string;
  timezone: string;
};
