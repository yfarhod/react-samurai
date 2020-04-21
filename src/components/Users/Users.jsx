import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countPages}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
      });
  }

  onChangePage = currentPage => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.countPages}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let totalPages = Math.ceil(
      this.props.totalUsersCount / this.props.countPages
    );

    let pagesArray = [];

    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }

    return (
      <div className={styles.container}>
        <div>
          {pagesArray.map(p => (
            <span
              className={
                styles.pagination +
                ' ' +
                (this.props.currentPage === p && styles.selectedPage)
              }
              onClick={() => this.onChangePage(p)}
            >
              {p}
            </span>
          ))}
        </div>

        {this.props.users.map(u => (
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
                  <button onClick={() => this.props.unfollow(u.id)}>
                    unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>
                    follow
                  </button>
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
  }
}

export default Users;
