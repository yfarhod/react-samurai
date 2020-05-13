import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={s.header}>
      <img src="/images/avatar.png" alt="" />
      <div className={s.itemBlock}>
        <NavLink to="/login">login</NavLink>
      </div>
    </header>
  );
};

export default Header;
