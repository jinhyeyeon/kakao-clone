import React from 'react';
import classNames from 'classnames';
import './btn.scss';

const Btn = ({className, onClick, children}) => {

  return (
    <button
      className={classNames("btn", className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Btn