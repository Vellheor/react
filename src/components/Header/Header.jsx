import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   
   return (
      <header className={s.header}>
        <img src="https://sites.google.com/a/netcmmi.com/share/_/rsrc/1473734124982/img/png/s/star-e01.png"></img>
        
        <div className={s.blockLogin}>
            {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
        </div>
      </header>
   );
}

export default Header;