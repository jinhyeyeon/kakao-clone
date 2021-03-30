import React from 'react';
import './profile.scss';

const Profile = ({profileImg, onClick}) => {

  return (
    <div
      className="profile"
      onClick={onClick}
    >
      <img src={profileImg || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt=""/>
    </div>
  )
}

export default Profile