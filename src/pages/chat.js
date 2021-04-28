
import React from 'react';
import {Link} from 'react-router-dom';
import ProfileItem from '../component/ProfileItem/ProfileItem';
import ChattingRoom from '../component/ChattingRoom/ChattingRoom';
import '../styles/chat.scss';

class Chat extends React.Component {
  state = {
    roomOpen: false,
    chattings: [
      {
        id: 1,
        name: '이름없음',
        text: 'ㅇ ㅁㅎ? ㅍㅅㅂ ㄱㄱ'
      },
      {
        id: 2,
        name: '엄마',
        text: '이 지지배야 시간이 몇신데 아직도 집에 안들어와! 얼른 기어들어와라! 경고했다? 이놈의 지지배',
      },
      {
        id: 3,
        name: '전남친',
        text: '자니?',
        date: '2021-01-01'
      },
    ],
  }

  render() {
    const {chattings, roomOpen} = this.state;
    return (
      <div className="chat">
        {roomOpen && 
          <ChattingRoom
            onClose={() => this.setState({roomOpen: false})}
          />
        }
        <ul className="chatting-list">
          {chattings.map(chatting => 
            <li
              key={chatting.id}
              onClick={() => this.setState({roomOpen: !roomOpen})}
            >
              <Link to={`/chat/${chatting.id}`}>
                <ProfileItem 
                  medium
                  {...chatting}
                />
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
export default Chat;