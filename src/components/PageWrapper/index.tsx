import s from './style.module.scss';
import { Searchbar } from '../';

const PageWrapper = () => {
  return (
    <div className={s.wrapper}>
      <Searchbar callback={(val: string) => handleSearch(val)} />
    </div>
  );

  function handleSearch(val: string) {
    console.log(val);
  }
};

export default PageWrapper;
