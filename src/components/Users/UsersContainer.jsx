import { connect } from 'react-redux';
import Users from './Users';
import {
  followAC,
  unfollowAC,
  usersAC,
  totalUsersCountAC
} from '../../redux/usersReducer';

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    countPages: state.usersPage.countPages
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
