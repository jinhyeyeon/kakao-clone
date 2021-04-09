import React from 'react';
import CahttingItem from '../ChattingItem/ChattingItem';
import SubHeader from '../SubHeader/SubHeader';
import ChattingInput from '../ChattingInput/ChattingInput';
import './chatting-room.scss';

class ChattingRoom extends React.Component {
  state = {
  }

  render() {
    const {} = this.state;
    return (
      <div className="chatting-room">
        <SubHeader />
        <ul className="chatting-room-list">
          <li>
            <CahttingItem
              name="이름없음"
              text="ㅇ ㅁㅎ? ㅍㅅㅂ ㄱㄱ"
            />
          </li>
          <li>
            <CahttingItem
              isMe
              text="안녕하세요!"
            />
          </li>
        </ul>
        <ChattingInput />
      </div>
    )
  }
}
export default ChattingRoom;