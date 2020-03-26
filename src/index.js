import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dialogs = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Farych' },
  { id: 3, name: 'Angel' },
  { id: 4, name: 'Princess' },
  { id: 5, name: 'Knight' }
];

const messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your doing dude?' },
  { id: 3, message: 'Yo' }
];

const posts = [
  { id: 1, post: 'How are you dude?', likesCount: 15 },
  { id: 2, post: "It's my first post", likesCount: 20 }
];

ReactDOM.render(
  <App dialogs={dialogs} messages={messages} posts={posts} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
