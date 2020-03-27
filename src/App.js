import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { Route, BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar data={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route
            path="/"
            exact
            render={() => <Profile data={props.state.profilePage} />}
          />
          <Route
            path="/profile"
            render={() => <Profile data={props.state.profilePage} />}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs data={props.state.dialogsPage} />}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
