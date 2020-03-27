import React from 'react';
import s from './../Sidebar.module.css';

const SidebarItem = props => {
  let imgUrl = '/images/avatars/' + props.ava;

  return (
    <div className={s.barItem}>
      <div className={s.barImage}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={s.barName}>{props.name}</div>
    </div>
  );
};

export default SidebarItem;
