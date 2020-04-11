const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const initialState = {
  dialogs: [
    { id: 1, name: 'Dimych', ava: '11.png' },
    { id: 2, name: 'Farych', ava: '15.png' },
    { id: 3, name: 'Angel', ava: '12.png' },
    { id: 4, name: 'Princess', ava: '13.png' },
    { id: 5, name: 'Knight', ava: '14.png' }
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your doing dude?' },
    { id: 3, message: 'Yo' }
  ],
  newPostMessage: 'Type here'
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const newMessage = {
        id: state.messages.length + 1,
        message: state.newPostMessage
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newPostMessage: ''
      };

    case UPDATE_MESSAGE_TEXT:
      return { ...state, newPostMessage: action.newText };

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
