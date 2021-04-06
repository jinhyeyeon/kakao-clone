
import React from 'react';
import ProfileItem from '../component/ProfileItem/ProfileItem';
import {formatDistance, subDays} from 'date-fns';
import ko from "date-fns/locale/ko";
import '../styles/chat.scss';

class Chat extends React.Component {
  state = {}

  render() {
    var result = formatDistance(subDays(new Date(), 3), new Date(), {addSuffix: true, locale: ko})
    return (
      <div className="chat">
        <ul>
          <li>
             <ProfileItem
              name="지네"
              date={result}
              medium
            />
          </li>
          <li>
             <ProfileItem
              name="지네"
              medium
            />
          </li>
          <li>
             <ProfileItem
              name="지네"
              medium
            />
          </li>
          <li>
             <ProfileItem
              name="지네"
              medium
            />
          </li>
          <li>
             <ProfileItem
              name="지네"
              medium
            />
          </li>
        </ul>
      </div>
    )
  }
}
export default Chat;