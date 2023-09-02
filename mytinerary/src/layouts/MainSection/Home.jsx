
import React from 'react';

import Carousel from '../../components/MainCarousel/Carousel';
import MainHeader from '../MainHeader/MainHeader';
import HeroWelcome from '../../components/HeroWelcome/HeroWelcome';
import Footer from '../MainFooter/Footer';


const Home = () => {
  return (
    <>
        <MainHeader />
    <div className="grid grid-cols-1 md:grid-cols-2">
       
    
        <HeroWelcome/>
        <Carousel />     
    </div>
       <Footer/>

    </>
  )
};

export default Home;
