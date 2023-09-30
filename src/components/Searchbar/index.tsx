import React, { useState } from 'react';
import s from './style.module.scss';
import { iconSearch } from '../../assets';

const Searchbar = ({ callback }: Props) => {
  const [searchBarValue, setSearchBarValue] = useState('');

  return (
    <div className={s.searchbarWrapper}>
      <input
        className={s.searchbar}
        placeholder={'Desired location'}
        value={searchBarValue}
        onChange={(e) => searchbarChange(e)}
        onKeyDown={(e) => (e.key === 'Enter' ? invokeSearch(searchBarValue) : null)}
      />
      <div className={s.searchbarIcon} onClick={() => invokeSearch(searchBarValue)}>
        <img src={iconSearch} alt="" />
      </div>
    </div>
  );

  function searchbarChange(e: any) {
    setSearchBarValue(e.target.value);
  }

  function invokeSearch(value: string) {
    callback(value);
  }
};

export default Searchbar;

type Props = {
  callback(val: string): void;
};
