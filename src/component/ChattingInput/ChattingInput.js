import React from 'react';
import Input from '../Input/Input';
import {BsPlusSquare} from "react-icons/bs";
import Btn from '../Btn/Btn';
import './chatting-input.scss';

class ChattingInput extends React.Component {
  state = {
  }

  render() {
    const {} = this.state;
    return (
      <div className="chatting-input">
        <Btn className="btn-more">
          <BsPlusSquare />
        </Btn>

        <Input isChat />
      </div>
    )
  }
}
export default ChattingInput;