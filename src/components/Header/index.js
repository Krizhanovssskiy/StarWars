import './style.scss';
import logo from '../../img/star_wars_logo_PNG34.png'

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from "../Modal";
import ListCategoriHeader from "./ListCategoriHeader";

const Header = () => {

  const [ gamburger, setGamburger ] = useState(false);

  return (
  <div className='Header'>
    <div className="container Header__box">
      <Link
        className='Logo'
        to='/'>
        <img src={logo} alt="logo"/>
      </Link>
      <ListCategoriHeader clazz='Header__nav-list'/>

      {
        gamburger && (
          <Modal onColose={() => setGamburger(false)}>
            <ListCategoriHeader clazz='Header__popap-nav'/>
          </Modal>
        )
      }

      <div
        onClick={() => setGamburger(!gamburger)}
        className={`Header__gamburger ${gamburger ? 'Header__closet' : ''}`}
      >
        <span className='first' />
        <span className='middle' />
        <span className='last'/>
      </div>

    </div>
  </div>
)};

export default Header;