const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: 'How are you dude?', likesCount: 15 },
        { id: 2, post: "It's my first post", likesCount: 20 }
      ],
      newPostText: 'it-samurai'
    },

    dialogsPage: {
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
    },

    sidebar: {
      friends: [
        { id: 1, name: 'Dimych', ava: '11.png' },
        { id: 2, name: 'Knight', ava: '14.png' },
        { id: 3, name: 'Angel', ava: '12.png' },
        { id: 4, name: 'Farych', ava: '15.png' }
      ]
    }
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: this._state.profilePage.posts.length + 1,
        post: this._state.profilePage.newPostText,
        likesCount: 0
      };

      this._state.profilePage.posts.push(newPost);
      this._callSubscriber(this._state);
      this._state.profilePage.newPostText = '';
    } else if (action.type === UPDATE_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_NEW_MESSAGE) {
      const newMessage = {
        id: this._state.dialogsPage.messages.length + 1,
        message: this._state.dialogsPage.newPostMessage
      };

      this._state.dialogsPage.messages.push(newMessage);
      this._callSubscriber(this._state);
      this._state.dialogsPage.newPostMessage = '';
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
      this._state.dialogsPage.newPostMessage = action.newText;
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = text => ({
  type: UPDATE_POST_TEXT,
  newText: text
});

export const addNewMessageActioCreator = () => ({ type: ADD_NEW_MESSAGE });
export const updateMessageTextActionCreator = text => ({
  type: UPDATE_MESSAGE_TEXT,
  newText: text
});

export default store;
