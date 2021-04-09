import React from 'react';
import {VscSmiley} from "react-icons/vsc";
import {IoCloseOutline} from 'react-icons/io5';
import classNames from 'classnames';
import './input.scss';

class Input extends React.Component {
  render() {
    const {
      placeholder,
      isClear,
      isChat,
      className
    } = this.props;
    return (
      <div className={classNames('input', className, {'is-icon': isChat || isClear})}>
        <input
          type="text"
          placeholder={placeholder}
        />

        {isClear && (
          <span className="icon-clear">
            <IoCloseOutline />
          </span>
        )}

        {isChat && (
          <span className="icon-emoticon">
            <VscSmiley />
          </span>
        )}
      </div>
    )
  }
}
export default Input;