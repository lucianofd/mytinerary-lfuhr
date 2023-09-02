import React, { useState, useEffect } from 'react';
import { getItems } from '../../apiService';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Carousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageGroups, setImageGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(0); 
  
  console.log(imageGroups);
  console.log(currentGroup);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cities = await getItems(); //función get del servicio
        console.log(cities);
        let groups = [];
        
        for (let i = 0; i < cities.length; i += 4) {
          groups.push(cities.slice(i, i + 4));
        }
           
        setImageGroups(groups);
        
        setCurrentGroup(0);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
      setIsLoading(false);
    };
    fetchData();
    // Cambia grupos de imágenes de forma automática
    const interval = setInterval(goToNextGroup, 3000);
      return () => clearInterval(interval);

  }, []);
  


      const goToNextGroup = () => {
         setCurrentGroup((currentGroup) => (currentGroup + 1) % imageGroups.length);
      };
      const goToPrevGroup = () => {
         setCurrentGroup((prevGroup) => (prevGroup - 1 + imageGroups.length) % imageGroups.length);
      };
  

  if (isLoading){
    return (
      <div className="">
        <h1>Cargando...</h1>
      </div>
    );
  
  }    

  return (
    <div className="relative bg-gray-200 py-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Popular Mytineraries</h2>
      <div className="flex justify-center items-center space-x-4 overflow-hidden">
        <div className="flex flex-wrap w-1/2 h-96">
          {imageGroups[currentGroup] &&
            imageGroups[currentGroup].map((city) => (
              <div className="w-1/2 p-2 relative" key={city.id}>
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={city.picture}
                  alt={city.name}
                />
                <div className="absolute inset-0 bg-black opacity-40 blur-lg rounded-lg"></div>
                <p className="absolute bottom-4 left-0 right-0 text-white text-center font-medium">
                  {city.name}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-4 flex justify-center items-center space-x-4">
        <button
          onClick={goToPrevGroup}
          className="text-gray-600 hover:text-gray-900 transition duration-300"
        >
          <FaChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNextGroup}
          className="text-gray-600 hover:text-gray-900 transition duration-300"
        >
          <FaChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
