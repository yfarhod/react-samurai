import {
  addPostActionCreator,
  updatePostTextActionCreator
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePostText: text => {
      dispatch(updatePostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
