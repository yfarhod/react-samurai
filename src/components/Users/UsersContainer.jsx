import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, usersAC } from '../../redux/usersReducer';

const mapStateToProps = state => {
  return {
    users: state.usersPage.users
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
