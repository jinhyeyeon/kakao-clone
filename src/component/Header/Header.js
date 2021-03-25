import React from 'react';
import './header.scss';
import {FiSearch} from 'react-icons/fi';
import {IoSettingsOutline, IoChatbubbleOutline} from 'react-icons/io5';

const Header = ({title}) => {

  return (
    <div className="header clearfix">
      <h1>{title}</h1>

      <ul className="nav">
        <li>
          <FiSearch />  
        </li>
        <li>
          <IoChatbubbleOutline />
        </li>
        <li>
          <IoSettingsOutline />
        </li>
      </ul>
    </div>
  )
}

export default Header