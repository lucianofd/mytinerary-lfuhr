
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainHeader from './layouts/MainHeader/MainHeader';
import Cities from './components/Cities/Cities';
import CityCard from './components/Cities/CityCard';
import Home from './components/HeroWelcome/HeroWelcome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/cities/:name" element={<CityCard />} />
      </Routes>
    </Router>
  );
};

export default App
