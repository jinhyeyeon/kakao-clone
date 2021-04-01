import React from 'react';
import ProfileItem from '../component/ProfileItem/ProfileItem';
import {IoIosArrowUp} from 'react-icons/io';
import '../styles/friend.scss';
import classNames from 'classnames';

class Friend extends React.Component {
  state = {
    Toggle: true
  };

  render() {
    const {Toggle} = this.state;

    return (
      <div className="friend">
        <div className="my-profile-list">
          <ProfileItem
            name="지네"
            text="내 프로필"
            profileImg="https://pbs.twimg.com/profile_images/968000221543202817/f92oypNr_400x400.jpg"
            large
          />
        </div>
        <div className="friend-list">
          <h2
            onClick={() => this.setState({Toggle: !Toggle})}
          >
            친구
            <span className={classNames({close: !Toggle})}>
              <IoIosArrowUp />
            </span>
          </h2>
          {Toggle && (
            <ul>
              <li>
                <ProfileItem 
                  name="송씨"
                />
              </li>
              <li>
                <ProfileItem
                  name="이름없음"
                  text="어쩌라고"
                />
              </li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}
export default Friend;