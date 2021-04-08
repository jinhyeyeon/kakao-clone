
import React from 'react';
import {FiSearch} from 'react-icons/fi';
import {IoIosArrowBack} from 'react-icons/io';
import {AiOutlineMenu} from "react-icons/ai";
import './sub-header.scss';

const SubHeader = ({name}) => {

  return (
    <div className="sub-header clearfix">
      <h2>{name}</h2>

      <button className="btn-back">
        <span>
          <IoIosArrowBack /> 29
        </span>
      </button>

      <ul className="sub-nav">
        <li>
          <FiSearch />  
        </li>
        <li>
          <AiOutlineMenu />
        </li>
      </ul>
    </div>
  )
}

export default SubHeader