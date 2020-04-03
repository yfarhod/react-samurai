const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      {
        const newMessage = {
          id: state.messages.length + 1,
          message: state.newPostMessage
        };

        state.messages.push(newMessage);
        state.newPostMessage = '';
      }
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newPostMessage = action.newText;
      return state;
    default:
      return state;
  }
};

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });
export const updateMessageTextActionCreator = text => ({
  type: UPDATE_MESSAGE_TEXT,
  newText: text
});

export default dialogsReducer;
