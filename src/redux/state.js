import { rerenderApp } from '../render';

const state = {
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
    ]
  },

  sidebar: {
    friends: [
      { id: 1, name: 'Dimych', ava: '11.png' },
      { id: 2, name: 'Knight', ava: '14.png' },
      { id: 3, name: 'Angel', ava: '12.png' },
      { id: 4, name: 'Farych', ava: '15.png' }
    ]
  }
};

export const addPost = () => {
  const newPost = {
    id: state.profilePage.posts.length + 1,
    post: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  rerenderApp(state, addPost, updatePostText);
  state.profilePage.newPostText = '';
};

export const updatePostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderApp(state, addPost, updatePostText);
};

export default state;
