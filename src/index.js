import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import StoreContext from './StoreContext';

export const rerenderApp = () => {
  console.log(store);
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderApp();

store.subscribe(() => {
  rerenderApp();
});
