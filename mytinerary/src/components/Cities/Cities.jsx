import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCitiesFailure, fetchCitiesRequest, fetchCitiesSuccess } from '../../store/actions/citiesActions';
import { Link as Anchor } from 'react-router-dom';
import SearchBar from '../SearchBars/SearchBar';
import MainHeader from '../../layouts/MainHeader/MainHeader';
import { getItems } from '../../apiService';
import Footer from '../../layouts/MainFooter/Footer';



const Cities = (props) => {

  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);
  const loading = useSelector((state) => state.cities.loading);
  const error = useSelector((state) => state.cities.error);
  const filteredCities = useSelector((state) => state.cities.filteredCities);

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  /*
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);*/
  
  useEffect(() => {
    // Fetch data
    const fetchData = async () => {
      try {
        dispatch(fetchCitiesRequest());
        const data = await getItems();
       
        console.log(data);
        //setCities(cities);
        //setFilteredCities(cities);
        dispatch(fetchCitiesSuccess(data));
      } catch (error) {
        dispatch(fetchCitiesFailure(error));
      }
    };

    fetchData();
    // Detectar cambios en el término de búsqueda
    if (searchTerm === '') {
      fetchCitiesSuccess();}
  }, [dispatch, searchTerm]);
  /*
  const handleFilteredResults = (filteredCities) => {
    dispatch(filteredCities);
  }
  */
  const handleFilteredResults = (filteredResults) => {
    dispatch(fetchCitiesSuccess(filteredResults));
  }
  return (
   <div> 
     <MainHeader/>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold mb-4 text-gray-800">Choose your next destination</h2>
      <SearchBar cities={cities} onFilteredResults={handleFilteredResults} className="bg-gray-100 shadow-md p-4 rounded-lg mb-6" />
        
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredCities.map((city) => (
          <div key={city._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Anchor
            to={{
              pathname: `/cities/${city.name}`,
              search: `?imageUrl=${encodeURIComponent(city.picture)}`,
              state: {cityName: city.name, itineraries: city.itineraries },
            }}
          >
            <img className="w-full h-48 object-cover" src={city.picture} alt={city.name} />
            <p className="p-4">{city.name}</p>
          </Anchor>
        </div>
        ))}
      </div>
    </div>
    <Footer/>
   </div> 
  );
};

export default Cities;
