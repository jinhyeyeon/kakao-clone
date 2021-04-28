
import React from 'react';
import {FiSearch} from 'react-icons/fi';
import {IoIosArrowBack} from 'react-icons/io';
import {AiOutlineMenu} from "react-icons/ai";
import './sub-header.scss';
import Btn from '../Btn/Btn';

const SubHeader = ({name, onClick}) => {

  return (
    <div className="sub-header clearfix">
      <h2>{name}</h2>

      <Btn
        className="btn-back"
        onClick={onClick}
      >
        <IoIosArrowBack /> 29
      </Btn>

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