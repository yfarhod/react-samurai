import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import {
  addNewMessageActioCreator,
  updateMessageTextActionCreator
} from '../../redux/state';

const Dialogs = props => {
  const dialogsElements = props.dialogsPage.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} key={d.id} />
  ));

  const messagesElements = props.dialogsPage.messages.map(m =>
    m.id % 2 !== 0 ? (
      <Message message={m.message} key={m.id} />
    ) : (
      <div className={s.evenItem} key={m.id}>
        <Message message={m.message} key={m.id} />
      </div>
    )
  );

  const textMessage = React.createRef();

  const addMessage = () => {
    props.dispatch(addNewMessageActioCreator());
  };

  const onMessageChange = () => {
    const text = textMessage.current.value;
    props.dispatch(updateMessageTextActionCreator(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements} <br />
        <div>
          <textarea
            onChange={onMessageChange}
            ref={textMessage}
            value={props.dialogsPage.newPostMessage}
          />
        </div>
        <div>
          <button onClick={addMessage}>Add Message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
