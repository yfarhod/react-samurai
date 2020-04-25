import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {
  follow,
  unfollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
  setFetchingState
} from '../../redux/usersReducer';
import * as axios from 'axios';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setFetchingState(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countPages}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
        this.props.setFetchingState(false);
      });
  }

  onChangePage = currentPage => {
    this.props.setFetchingState(true);
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.countPages}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setFetchingState(false);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            countPages={this.props.countPages}
            currentPage={this.props.currentPage}
            onChangePage={this.onChangePage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    countPages: state.usersPage.countPages,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
  setFetchingState
})(UsersContainer);
