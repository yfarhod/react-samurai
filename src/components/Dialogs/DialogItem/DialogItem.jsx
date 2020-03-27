import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = props => {
  let path = '/dialogs/' + props.id;
  let imgUrl = '/images/avatars/' + props.ava;

  return (
    <div>
      <NavLink to={path}>
        <img src={imgUrl} alt="" /> {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
