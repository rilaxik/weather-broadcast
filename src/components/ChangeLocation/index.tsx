import React from 'react';
import s from './style.module.scss';

const ChangeLocation = ({ callback }: Props) => {
  return (
    <div className={s.changeWrapper}>
      <div className={s.change} onClick={callback}>
        Change Location
      </div>
    </div>
  );
};

export default ChangeLocation;

type Props = {
  callback: () => void;
};
