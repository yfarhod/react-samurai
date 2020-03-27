import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = props => {
  const dialogsElements = props.data.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} key={d.id} />
  ));

  const messagesElements = props.data.messages.map(m =>
    m.id % 2 !== 0 ? (
      <Message message={m.message} key={m.id} />
    ) : (
      <div className={s.evenItem} key={m.id}>
        <Message message={m.message} key={m.id} />
      </div>
    )
  );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
