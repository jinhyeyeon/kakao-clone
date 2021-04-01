import classNames from 'classnames';
import React from 'react';
import './profile.scss';

const Profile = ({profileImg, onClick, large}) => {

  return (
    <div
      className={classNames("profile", {large})}
      onClick={onClick}
      style={{backgroundImage: `url(${profileImg || 'https://blog.kakaocdn.net/dn/cyOIpg/btqx7JTDRTq/1fs7MnKMK7nSbrM9QTIbE1/img.jpg'})`}}
    />
  )
}

export default Profile