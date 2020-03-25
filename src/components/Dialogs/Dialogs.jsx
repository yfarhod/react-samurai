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
  const dialogsData = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Farych' },
    { id: 3, name: 'Angel' },
    { id: 4, name: 'Princess' },
    { id: 5, name: 'Knight' }
  ];

  const messageData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your doing dude?' },
    { id: 3, message: 'Yo' }
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>
      <div className={s.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
      </div>
    </div>
  );
};

export default Dialogs;
