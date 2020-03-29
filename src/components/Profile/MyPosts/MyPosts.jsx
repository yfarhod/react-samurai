import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  const postsElements = props.posts.map(p => (
    <Post message={p.post} likes={p.likesCount} key={p.id} />
  ));

  const textElement = React.createRef();

  const addPost = () => {
    props.addPost();
  };

  const updatePostText = () => {
    const text = textElement.current.value;
    props.updatePostText(text);
  };

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={updatePostText}
            ref={textElement}
            value={props.newPostText}
          />
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
