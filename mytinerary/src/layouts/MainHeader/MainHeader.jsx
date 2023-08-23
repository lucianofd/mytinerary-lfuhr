import React from 'react';
import Header from '../Header/Header';
import HeroWelcome from '../../components/HeroWelcome/HeroWelcome';
import Footer from '../MainFooter/Footer';

const MainHeader = ({ children }) => {
  return (
    <div className="bg-blue-500 text-white">
      <Header />
      
      {children}
    </div>
  );
};

export default MainHeader;
