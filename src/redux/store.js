import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  }
};

export default store;
