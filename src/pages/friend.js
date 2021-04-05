import React from 'react';
import ProfileItem from '../component/ProfileItem/ProfileItem';
import {IoIosArrowUp} from 'react-icons/io';
import '../styles/friend.scss';
import classNames from 'classnames';
import { MENU_HOME } from '../constants/menu';

class Friend extends React.Component {
  state = {
    Toggle: true,
    friends: [
      {
        id: 1,
        name: '송씨',
        text: 'But꽃'
      },
      {
        id: 2,
        name: '카카오봇',
      },
      {
        id: 3,
        name: '테스트',
        text: '곤피곤피 얼른 집에가고 싶다! 퇴근을 원한다!'
      }
    ],
  };

  render() {
    const {Toggle, friends} = this.state;

    return (
      <div 
        className="friend"
      >
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
              {friends.map(friend => 
              <li key={friend.id}>
                <ProfileItem 
                  {...friend}
                />
              </li>
              )}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
export default Friend;