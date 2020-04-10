import React from 'react';
import {
  addNewMessageActionCreator,
  updateMessageTextActionCreator
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const state = store.getState().dialogsPage;

        const addMessage = () => {
          store.dispatch(addNewMessageActionCreator());
        };

        const onMessageChange = text => {
          store.dispatch(updateMessageTextActionCreator(text));
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
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
