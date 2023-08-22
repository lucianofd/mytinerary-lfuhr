import React, { useState, useEffect } from 'react';


// Componente SearchBar
const SearchBar = ({ cities, onFilteredResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    const filtered = cities.filter((city) =>
      city.name.toLowerCase().startsWith(newSearchTerm.toLowerCase().trim())
    );
    onFilteredResults(filtered);
  };

  
  return (
    <input
      type="text"
      placeholder="Search cities..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;