import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = props => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={props.itemClass}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Farych" id="2" itemClass={s.active} />
        <DialogItem name="Angel" id="3" />
        <DialogItem name="Princess" id="4" />
        <DialogItem name="Knight" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How is your doing dude?" />
        <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
