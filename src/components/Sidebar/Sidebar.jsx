import React from 'react';
import s from './Sidebar.module.css';
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = props => {
  const friendItems = props.data.friends.map(f => (
    <SidebarItem name={f.name} key={f.id} ava={f.ava} />
  ));

  return (
    <div>
      <div className={s.section}>FRIENDS</div>
      <div className={s.friend}>{friendItems}</div>
    </div>
  );
};

export default Sidebar;
