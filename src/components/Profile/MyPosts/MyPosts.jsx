import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updatePostTextActionCreator
} from '../../../redux/state';

const MyPosts = props => {
  const postsElements = props.posts.map(p => (
    <Post message={p.post} likes={p.likesCount} key={p.id} />
  ));

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const updatePostText = e => {
    const text = e.target.value;
    props.dispatch(updatePostTextActionCreator(text));
  };

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={updatePostText} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
