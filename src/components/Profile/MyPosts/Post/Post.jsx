import React from 'react';
import s from './Post.module.css';

const Post = props => {
  return (
    <div className={s.item}>
      <img
        src="https://blogg.vk.se/wp-content/uploads/oldblog/1598/images/17046_302704055115_302690570115_3317738_6771544_n.jpg"
        alt=""
      />
      {props.message}
      <div>
        <span>like count: {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
