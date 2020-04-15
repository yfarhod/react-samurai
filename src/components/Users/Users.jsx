import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';

const Users = props => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios(
        'https://social-network.samuraijs.com/api/1.0/users'
      ).then(response => props.setUsers(response.data.items));
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div className={styles.photo}>
              <img
                src={
                  u.photos.small == null
                    ? '/images/avatars/13.png'
                    : u.photos.small
                }
                alt=""
              />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.city'}</div>
              <div>{'u.location.country'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
