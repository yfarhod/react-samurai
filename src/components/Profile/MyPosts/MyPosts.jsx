import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  const postsElements = props.posts.map(p => (
    <Post message={p.post} likes={p.likesCount} key={p.id} />
  ));

  const onAddPost = () => {
    props.addPost();
  };

  const onUpdatePostText = e => {
    const text = e.target.value;
    props.updatePostText(text);
  };

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onUpdatePostText} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
