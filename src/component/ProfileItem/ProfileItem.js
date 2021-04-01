import React from 'react';
import './profile-item.scss';
import Profile from '../Profile/Profile';

const ProfileItem = ({profileImg, name, text, date, large, onClick}) => {
  return (
    <div
      className="profile-item"
      onClick={onClick}
    >
      <Profile
        profileImg={profileImg}
        large={large}
      />

      <div className="profile-info">
        <h2>
          {name}
          {date && 
            <span className="date">{date}</span>
          }
        </h2>
        {text && 
          <p className="ellipsis">
            {text}
          </p>
        }
      </div>
    </div>
  )
}

export default ProfileItem