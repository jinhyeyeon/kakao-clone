import React from 'react';
import Profile from '../Profile/Profile';
import classNames from 'classnames';
import './chatting-item.scss';

const CahttingItem = ({profileImg, isMe, img, text, name, large, medium, onClick}) => {
  return (
    <div className={classNames('chatting-item clearfix', {isMe})}>
      {!isMe && (
        <>
          <Profile
            profileImg={profileImg}
            large={large}
            medium={medium}
            small
          />
          <h3>{name}</h3>
        </>
      )}
      <div className="bubble-wrap">
        <p className="bubble">{text || img}</p>
      </div>
    </div>
  )
}

export default CahttingItem