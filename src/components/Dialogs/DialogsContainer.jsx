import React from 'react';
import {
  addNewMessageActionCreator,
  updateMessageTextActionCreator
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
  const state = props.store.getState().dialogsPage;

  const addMessage = () => {
    props.store.dispatch(addNewMessageActionCreator());
  };

  const onMessageChange = text => {
    props.store.dispatch(updateMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      updateMessageText={onMessageChange}
      addNewMessage={addMessage}
      dialogs={state.dialogs}
      messages={state.messages}
      newPostMessage={state.newPostMessage}
    />
  );
};

export default DialogsContainer;
