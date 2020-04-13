import React from 'react';
import styles from './Users.module.css';

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        imgUrl:
          'https://aldretandvard.se/wp-content/uploads/2016/06/person-icons-silhouette-711979-5023819-1024x538.png',
        fullName: 'Farych',
        status: 'I am a big boss',
        location: { city: 'Stockholm', country: 'Sweden' }
      },
      {
        id: 2,
        followed: false,
        imgUrl:
          'https://aldretandvard.se/wp-content/uploads/2016/06/person-icons-silhouette-711979-5023819-1024x538.png',
        fullName: 'Dimych',
        status: 'I am a boss too',
        location: { city: 'Minsk', country: 'Belarus' }
      },
      {
        id: 3,
        followed: true,
        imgUrl:
          'https://aldretandvard.se/wp-content/uploads/2016/06/person-icons-silhouette-711979-5023819-1024x538.png',
        fullName: 'Jecka',
        status: 'I am a boss too',
        location: { city: 'Kyev', country: 'Ukraine' }
      }
    ]);
  }

  return (
    <div className={styles.container}>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div className={styles.photo}>
              <img src={u.imgUrl} alt="" />
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
            <div>
              <span>{u.fullName}</span>
              <span>{u.location.city}</span>
            </div>
            <div>
              <span>{u.status}</span>
              <span>{u.location.country}</span>
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
