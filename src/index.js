import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';

export const rerenderApp = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderApp(store.getState());

store.subscribe(() => {
  const state = store.getState();
  rerenderApp(state);
});
