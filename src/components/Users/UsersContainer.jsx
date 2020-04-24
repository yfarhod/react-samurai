import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
  followAC,
  unfollowAC,
  usersAC,
  totalUsersCountAC,
  currentPageAC
} from '../../redux/usersReducer';
import * as axios from 'axios';

class UsersContainer extends React.Component {
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
      <Users
        pagesArray={pagesArray}
        currentPage={this.props.currentPage}
        onChangePage={this.onChangePage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    countPages: state.usersPage.countPages,
    currentPage: state.usersPage.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(usersAC(users));
    },
    setTotalUsers: totalUsersCount => {
      dispatch(totalUsersCountAC(totalUsersCount));
    },
    setCurrentPage: currentPage => {
      dispatch(currentPageAC(currentPage));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
