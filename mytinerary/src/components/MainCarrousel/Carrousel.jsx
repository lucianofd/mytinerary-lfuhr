import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [imageGroups, setImageGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(0); 
  
  console.log(currentGroup);
  
  useEffect(() => {
    // Carga las imágenes desde el archivo cities.json
    fetch('/data/cities.json')
      .then((response) => response.json())
      .then((data) => {
        // Divide las imágenes en grupos de 4
        const groups = [];
        for (let i = 0; i < data.length; i += 4) {
          groups.push(data.slice(i, i + 4));
          console.log(groups);
        };
        setImageGroups(groups);
        setCurrentGroup(0);
              
       
      })
      .catch((error) => console.error('Error fetching cities.json:', error));
       
      // Cambia grupos de imágenes de forma automática
      const interval = setInterval(goToNextGroup, 5000);
      return () => clearInterval(interval);

  }, []);

      const goToNextGroup = () => {
         setCurrentGroup((prevGroup) => (prevGroup + 1) % imageGroups.length);
      };
      const goToPrevGroup = () => {
         setCurrentGroup((prevGroup) => (prevGroup - 1 + cities.length) % imageGroups.length);
      };
  

 

  return (
    <div className="bg-gray-200 py-10 relative">
      <h2 className="text-2xl font-bold mb-4 text-center">Popular Mytineraries</h2>
      <div className="flex justify-center items-center space-x-4 overflow-hidden">
        <div className="flex flex-wrap w-96 h-96">
        {console.log('imageGroups[currentGroup]:', imageGroups[currentGroup])}
            {imageGroups[currentGroup] && imageGroups[currentGroup].map((cityGroup) => (
            <div className="flex w-1/2" key={cityGroup[0].id}>
              {cityGroup.map((city) => (
                <div
                  key={city.id}
                  className="w-1/2 p-2 rounded-md overflow-hidden shadow-lg transform transition-all duration-500"
                >
                  <img className="w-full h-full object-cover" src={city.image} alt={city.name} />
                  <p className="text-white bg-blue-500 text-center p-2">{city.name}</p>
                </div>
              ))}
            </div>
              ))} 
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={goToPrevGroup}
          className="text-gray-600 hover:text-gray-900 transition duration-300"
        >
          {/* Ícono de flecha hacia la izquierda */}
        </button>
        <button
          onClick={goToNextGroup}
          className="text-gray-600 hover:text-gray-900 transition duration-300"
        >
          {/* Ícono de flecha hacia la derecha */}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
