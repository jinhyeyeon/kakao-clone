import React from 'react';
import classNames from 'classnames';
import './profile.scss';

const Profile = ({profileImg, onClick, small, medium, large}) => {

  return (
    <div
      className={classNames("profile", {large, medium, small})}
      onClick={onClick}
      style={{backgroundImage: `url(${profileImg || 'https://blog.kakaocdn.net/dn/cyOIpg/btqx7JTDRTq/1fs7MnKMK7nSbrM9QTIbE1/img.jpg'})`}}
    />
  )
}

export default Profile