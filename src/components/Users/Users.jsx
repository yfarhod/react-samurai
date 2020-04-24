import React from 'react';
import styles from './Users.module.css';

const Users = props => {
  return (
    <div className={styles.container}>
      <div>
        {props.pagesArray.map(p => (
          <span
            className={
              styles.pagination +
              ' ' +
              (props.currentPage === p && styles.selectedPage)
            }
            onClick={() => props.onChangePage(p)}
          >
            {p}
          </span>
        ))}
      </div>

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
