import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import LiAnchor from '../LiAnchor/liAnchor';
import Login from '../Loggin/login';

const Nav = ({children}) => {
  return (
    <nav className="flex items-center">
      <LiAnchor />
      <Login />
      {children}
    </nav>
  );
};

export default Nav;
