import React from 'react';
import s from './style.module.scss';

const SectionGeneral = () => {
  return (
    <div className={s.generalWrapper}>
      <span className={s.gCity}>Athens</span>
      <div className={s.gDateTime}>
        <div className={s.gTime}>09:03</div>
        <div className={s.gDate}>Thursday, 31 Aug</div>
      </div>
    </div>
  );
};

export default SectionGeneral;
