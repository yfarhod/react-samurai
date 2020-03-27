import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = props => {
  const friendItems = props.data.friends.map(f => f + ' ');

  return (
    <div>
      <div className={s.section}>FRIENDS</div>
      <div className={s.friend}>{friendItems}</div>
    </div>
  );
};

export default Sidebar;
