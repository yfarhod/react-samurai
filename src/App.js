import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { Route } from 'react-router-dom';

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar data={props.state.sidebar} />
      <div className="app-wrapper-content">
        <Route
          path="/"
          exact
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updatePostText={props.updatePostText}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updatePostText={props.updatePostText}
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              dialogsPage={props.state.dialogsPage}
              addNewMessage={props.addNewMessage}
              updateMessageText={props.updateMessageText}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
