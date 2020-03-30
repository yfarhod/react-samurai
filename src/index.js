import state, {
  addPost,
  updatePostText,
  addNewMessage,
  updateMessageText,
  subscribe
} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export const rerenderApp = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updatePostText={updatePostText}
        addNewMessage={addNewMessage}
        updateMessageText={updateMessageText}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderApp(state);

subscribe(rerenderApp);
