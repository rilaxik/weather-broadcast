import React from 'react';
import { getFlag } from '../../api';

import { iconPopulation } from '../../assets';
import s from './style.module.scss';

const CityInfo = ({
  countryCode,
  country,
  name,
  nameAdm,
  nameExt,
  population,
  callback
}: Props) => {
  return (
    <div className={s.cityWrapper} onClick={callback}>
      <div className={s.flagIcon}>
        <img src={getFlag(countryCode)} alt="" />
      </div>
      <div className={s.cityName}>
        {name}
        {nameAdm ? `, ${nameAdm}` : null}
        {nameExt ? `, ${nameExt}` : null}
        {country ? `, ${country}` : null}
      </div>
      {population ? (
        <div className={s.population}>
          {population}
          <div className={s.populationIcon}>
            <img src={iconPopulation} alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CityInfo;

type Props = {
  countryCode: string;
  country: string;
  name: string;
  nameAdm: string;
  nameExt: string;
  population?: number;
  callback: () => void;
};
