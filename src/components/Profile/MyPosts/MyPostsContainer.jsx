import React from 'react';
import {
  addPostActionCreator,
  updatePostTextActionCreator
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const state = store.getState().profilePage;

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const updatePostText = text => {
          store.dispatch(updatePostTextActionCreator(text));
        };

        return (
          <MyPosts
            updatePostText={updatePostText}
            addPost={addPost}
            posts={state.posts}
            newPostText={state.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
