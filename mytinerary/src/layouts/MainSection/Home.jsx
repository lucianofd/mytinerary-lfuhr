
import React from 'react';
import MainHeader from './MainHeader';
import MainHero from './MainHero';
import Carousel from '../../components/MainCarousel/Carousel';
import Footer from '../MainFooter/Footer';

const Home = ({children}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
       <MainHeader />
        <MainHero />
      
        <Carousel />
      
      <Footer />
      {children}
    
    </div>
  )
};

export default Home;
