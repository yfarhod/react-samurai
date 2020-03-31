import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';

export const rerenderApp = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        updatePostText={store.updatePostText.bind(store)}
        addNewMessage={store.addNewMessage.bind(store)}
        updateMessageText={store.updateMessageText.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderApp(store);

store.subscribe(rerenderApp);
