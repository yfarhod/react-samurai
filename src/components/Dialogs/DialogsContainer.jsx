import {
  addNewMessageActionCreator,
  updateMessageTextActionCreator
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newPostMessage: state.dialogsPage.newPostMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateMessageText: text => {
      dispatch(updateMessageTextActionCreator(text));
    },
    addNewMessage: () => {
      dispatch(addNewMessageActionCreator());
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
