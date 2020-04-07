import React from 'react';
import {
  addPostActionCreator,
  updatePostTextActionCreator
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = props => {
  const state = props.store.getState().profilePage;

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const updatePostText = text => {
    props.store.dispatch(updatePostTextActionCreator(text));
  };
  return (
    <MyPosts
      updatePostText={updatePostText}
      addPost={addPost}
      posts={state.posts}
      newPostText={state.newPostText}
    />
  );
};

export default MyPostsContainer;
