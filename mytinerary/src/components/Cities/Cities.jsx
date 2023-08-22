import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <h2>Cities</h2>
      <SearchBar cities={cities} onFilteredResults={handleFilteredResults} />

      <div>
        {filteredCities.map((city) => (
          <div key={city.id}>
            <Link to={`/city/${city.id}`}> 
              <img src={city.image} alt={city.name} />
              <p>{city.name}</p>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};


export default Cities;
