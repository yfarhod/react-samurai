import React from 'react';
import styles from './Users.module.css';
import preloader from '../../assets/images/preloader.svg';

const Users = props => {
  debugger;
  let totalPages = Math.ceil(props.totalUsersCount / props.countPages);

  let pagesArray = [];

  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i);
  }

  return (
    <div className={styles.container}>
      <div>
        {props.isFetching ? <img src={preloader} alt="preloader" /> : null}
      </div>
      <div>
        {pagesArray.map(p => (
          <span
            key={p}
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
