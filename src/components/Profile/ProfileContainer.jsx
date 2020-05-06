import React from 'react';
import * as axios from 'axios';
import s from './Profile.module.css';
import Profile from './Profile';

import { setUserProfile } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return <Profile profile={this.props.profile} />;
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

const ProfileRouterContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
  setUserProfile,
})(ProfileRouterContainer);
