import React from 'react';
import Nav from '../../components/Nav/Nav';
import Logo from '../../components/Logo/Logo';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 md:px-8 lg:px-12 xl:px-16">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
