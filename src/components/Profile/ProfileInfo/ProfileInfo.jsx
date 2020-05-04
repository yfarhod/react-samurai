import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (props.profile == null) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="" />
      </div>
      <div className={s.descriptionItem}>
        <img src={props.profile.photos.small} alt="avatar" />
        <br />
        Status: {props.profile.aboutMe}
      </div>
    </div>
  );
};

export default ProfileInfo;
