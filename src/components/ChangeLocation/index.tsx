import React from 'react';
import s from './style.module.scss';

const ChangeLocation = ({ callback }: Props) => {
  return (
    <div className={s.changeWrapper} onClick={callback}>
      <div className={s.change}>Change Location</div>
    </div>
  );
};

export default ChangeLocation;

type Props = {
  callback: () => void;
};
