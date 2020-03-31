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

  getState() {
    return this._state;
  },

  setSubscribe() {},

  addPost() {
    const newPost = {
      id: this._state.profilePage.posts.length + 1,
      post: this._state.profilePage.newPostText,
      likesCount: 0
    };

    this._state.profilePage.posts.push(newPost);
    this.setSubscribe(this._state);
    this._state.profilePage.newPostText = '';
  },

  updatePostText(newText) {
    this._state.profilePage.newPostText = newText;
    this.setSubscribe(this._state);
  },

  addNewMessage() {
    const newMessage = {
      id: this._state.dialogsPage.messages.length + 1,
      message: this._state.dialogsPage.newPostMessage
    };

    this._state.dialogsPage.messages.push(newMessage);
    this.setSubscribe(this._state);
    this._state.dialogsPage.newPostMessage = '';
  },

  updateMessageText(newText) {
    this._state.dialogsPage.newPostMessage = newText;
    this.setSubscribe(this._state);
  },

  subscribe(observer) {
    this.setSubscribe = observer;
  }
};

export default store;
