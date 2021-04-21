import React from 'react';
import {VscSmiley} from "react-icons/vsc";
import {IoCloseOutline} from 'react-icons/io5';
import {AiOutlineEnter} from 'react-icons/ai';
import classNames from 'classnames';
import './input.scss';

class Input extends React.Component {
  render() {
    const {
      placeholder,
      isClear,
      isChat,
      value,
      onChange,
      onClick,
      className
    } = this.props;

    return (
      <div className={classNames('input', className, {'is-icon': isChat || isClear})}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onClick();
            }
          }}
          placeholder={placeholder}
        />
        {isClear && (
          <span className="icon-clear">
            <IoCloseOutline />
          </span>
        )}
        {isChat && (
          <>
            <span className="icon-emoticon">
              <VscSmiley />
            </span>
            <span className="icon-save">
              <AiOutlineEnter onClick={onClick} />
            </span>
          </>
        )}
      </div>
    )
  }
}
export default Input;