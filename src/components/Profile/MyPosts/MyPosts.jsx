import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  const posts = [
    { id: 1, post: 'How are you dude?', likesCount: 15 },
    { id: 2, post: "It's my first post", likesCount: 20 }
  ];

  const postsElements = posts.map(p => (
    <Post message={p.post} likes={p.likesCount} />
  ));

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
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
