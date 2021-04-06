
import React from 'react';
import ProfileItem from '../component/ProfileItem/ProfileItem';
import {formatDistance, subDays} from 'date-fns';
import ko from "date-fns/locale/ko";
import '../styles/chat.scss';
import { Link } from 'react-router-dom';

class Chat extends React.Component {
  state = {
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
        text: '자니?'
      }
    ],
  }

  render() {
    const {chattings} = this.state;
    var result = formatDistance(subDays(new Date(), 3), new Date(), {addSuffix: true, locale: ko})
    return (
      <div className="chat">
        <ul>
          {chattings.map(chatting => 
          <li key={chatting.id}>
            <Link to={`/chat/${chatting.id}`}>
              <ProfileItem 
                medium
                date={result}
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