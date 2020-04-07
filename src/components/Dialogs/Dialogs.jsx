import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = props => {
  const dialogsElements = props.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} key={d.id} />
  ));

  const messagesElements = props.messages.map(m =>
    m.id % 2 !== 0 ? (
      <Message message={m.message} key={m.id} />
    ) : (
      <div className={s.evenItem} key={m.id}>
        <Message message={m.message} key={m.id} />
      </div>
    )
  );

  const addMessage = () => {
    props.addNewMessage();
  };

  const onMessageChange = e => {
    const text = e.target.value;
    props.updateMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements} <br />
        <div>
          <textarea onChange={onMessageChange} value={props.newPostMessage} />
        </div>
        <div>
          <button onClick={addMessage}>Add Message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
