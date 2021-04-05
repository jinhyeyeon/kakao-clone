import React from 'react';
import './footer.scss';
import {FiUser, FiMoreHorizontal} from 'react-icons/fi';
import {IoChatbubbleOutline} from 'react-icons/io5';
import {HiOutlineHashtag} from 'react-icons/hi';
import {AiOutlineShopping} from 'react-icons/ai';
import {MENU_HOME, MENU_CHATTING, MENU_TAG, MENU_SHOP, MENU_MORE} from '../../constants/menu';
import { Link } from 'react-router-dom';

const Footer = ({on}) => {
  return (
    <ul className="footer clearfix">
      <li
        on={on === MENU_HOME}
      >
        <Link to="/">
          <FiUser />
        </Link>
      </li>
      <li
        on={on === MENU_CHATTING}
      >
        <Link to="/chat">
          <IoChatbubbleOutline />
        </Link>
      </li>
      <li
        on={on === MENU_TAG}
      >
        <Link to="/">
          <HiOutlineHashtag />
        </Link>
      </li>
      <li
        on={on === MENU_SHOP}
      >
        <Link to="/">
          <AiOutlineShopping />
        </Link>
      </li>
      <li
        on={on === MENU_MORE}
      >
        <Link to="/">
          <FiMoreHorizontal />
        </Link>
      </li>
    </ul>
  )
}

export default Footer