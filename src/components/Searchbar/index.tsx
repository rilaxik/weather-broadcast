import React, { useState } from 'react';
import s from './style.module.scss';
import { iconSearch } from '../../assets';

const Searchbar = ({ callback }: Props) => {
  const [searchBarValue, setSearchBarValue] = useState('');

  return (
    <div className={s.searchbarWrapper}>
      <input
        className={s.searchbar}
        placeholder={'Your location'}
        value={searchBarValue}
        defaultValue={searchBarValue}
        onChange={(e) => searchbarChange(e)}
      />
      <div className={s.searchbarIcon} onClick={() => callback(searchBarValue)}>
        <img src={iconSearch} alt="" />
      </div>
    </div>
  );

  function searchbarChange(e: any) {
    setSearchBarValue(e.target.value);
    // console.log(e.target.value);
  }
};

export default Searchbar;

type Props = {
  callback(val: string): void;
};
