import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src="/images/avatar.png" alt="" />
    </header>
  );
};

export default Header;
