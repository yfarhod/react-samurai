import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = props => {
  let path = '/dialogs/' + props.id;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  const dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Farych' },
    { id: 3, name: 'Angel' },
    { id: 4, name: 'Princess' },
    { id: 5, name: 'Knight' }
  ];

  const messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your doing dude?' },
    { id: 3, message: 'Yo' }
  ];

  const dialogsElements = dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = messages.map(m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
