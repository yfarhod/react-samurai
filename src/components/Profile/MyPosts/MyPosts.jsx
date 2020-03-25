import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  const postData = [
    { id: 1, post: 'How are you dude?', likesCount: 15 },
    { id: 2, post: "It's my first post", likesCount: 20 }
  ];

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].post} likes={postData[0].likesCount} />
        <Post message={postData[1].post} likes={postData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
