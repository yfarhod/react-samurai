import React from 'react';
import * as axios from 'axios';
import s from './Profile.module.css';
import Profile from './Profile';

import { setUserProfile } from '../../redux/profileReducer';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {
  setUserProfile,
})(ProfileContainer);
