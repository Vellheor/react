import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FastMessages from './FastMessages/FastMessages';

const Navbar = (props) => {
   return (
      <nav className={s.nav}>
        <div><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></div>
        <div><NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink></div>
        <div><a>Music</a></div>
        <div><a>News</a></div>
        <div><a>Settings</a></div>
        {/* <FastMessages fastMessage={props.navbar.fastMessage}/> */}
      </nav>
   );
}

export default Navbar;