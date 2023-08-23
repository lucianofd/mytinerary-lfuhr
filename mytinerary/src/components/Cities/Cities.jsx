import React, { useState, useEffect } from 'react';
import { Link as Anchor } from 'react-router-dom';
import SearchBar from '../SearchBars/SearchBar';
import MainHeader from '../../layouts/MainHeader/MainHeader';

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    // Fetch data
    fetch('/data/cities.json')
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
        setFilteredCities(data);
      })
      .catch((error) => {
        console.error('Error fetching cities:', error);
      });
  }, []);

  const handleFilteredResults = (filteredResults) => {
    setFilteredCities(filteredResults);
  };

  return (
   <div> 
     <MainHeader/>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold mb-4 text-gray-800">Choose your next destination</h2>
      <SearchBar cities={cities} onFilteredResults={handleFilteredResults} className="bg-gray-100 shadow-md p-4 rounded-lg mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredCities.map((city) => (
          <div key={city.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Anchor to={{ pathname: `/Cities/${city.name}`, state: { imageUrl: city.image } }}>
              <img className="w-full h-48 object-cover" src={city.image} alt={city.name} />
              <p className="p-4">{city.name}</p>
            </Anchor>
          </div>
        ))}
      </div>
    </div>
   </div> 
  );
};

export default Cities;
