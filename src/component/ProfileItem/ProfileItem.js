import React from 'react';
import Profile from '../Profile/Profile';
import koLocale from 'date-fns/locale/ko';
import differenceInDays from 'date-fns/difference_in_days';
import distanceInWords from 'date-fns/distance_in_words';
import format from 'date-fns/format';
import './profile-item.scss';

function getFormattedDate(d) {
  const now = new Date();
  const date = new Date(d);

  // 1분 이내면 방금
  if (now - date < 60 * 1000) return '방금';
  // 10일 이내면 텍스트 형식
  if (differenceInDays(now, date) < 10) {
      return distanceInWords(now, date, {locale: koLocale, addSuffix: true});
  }
  // 그 외의 경우엔 YYYY-MM-DD
  return format(date, 'YYYY-MM-DD');
};

const ProfileItem = ({profileImg, name, text, date, large, medium, onClick}) => {
  return (
    <div
      className="profile-item"
      onClick={onClick}
    >
      <Profile
        profileImg={profileImg}
        large={large}
        medium={medium}
      />

      <div className="profile-info">
        <h2>
          {name}
          {date && 
            <span className="date">{getFormattedDate(date)}</span>
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