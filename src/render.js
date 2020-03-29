import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

export const rerenderApp = (state, addPost, updatePostText) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updatePostText={updatePostText} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();