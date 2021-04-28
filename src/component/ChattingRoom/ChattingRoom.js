import React from 'react';
import Btn from '../Btn/Btn'
import Input from '../Input/Input'
import {BsPlusSquare} from 'react-icons/bs';
import CahttingItem from '../ChattingItem/ChattingItem';
import SubHeader from '../SubHeader/SubHeader'; 

import '../ChattingInput/chatting-input.scss';
import './chatting-room.scss';

class ChattingRoom extends React.Component {
  state = {
    input: '',
    list: [
      {
        isMe: false,
        name: '이름없음',
        text: "ㅇ ㅁㅎ? ㅍㅅㅂ ㄱㄱ"
      },
      {
        isMe: true,
        text: "안녕하세요!"
      },
    ],
  }

  render() {
    const {list, input} = this.state;
    const {onClose} = this.props;
    return (
      <div className="chatting-room">
        <SubHeader
          onClick={onClose}
        />
        <ul className="chatting-room-list">
          {list.map((item, idx) => (
            <li key={idx}>
              <CahttingItem
                isMe={item.isMe}
                name={item.name}
                text={item.text}
              />
            </li>
          ))}
        </ul>
        <div className="chatting-input">
          <Btn className="btn-more">
            <BsPlusSquare />
          </Btn>

          <Input
            isChat
            value={input}
            onChange={(e) => {
              this.setState({input: e.target.value});
            }}
            onClick={() => {
              this.setState(curr => ({
                ...curr,
                input: '',
                list: [
                  ...curr.list,
                  {isMe: true, text: curr.input},
                ]
              }));
            }}
          />
        </div>
      </div>
    )
  }
}
export default ChattingRoom;