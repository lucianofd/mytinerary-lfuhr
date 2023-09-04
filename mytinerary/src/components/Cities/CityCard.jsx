import React from 'react';
import { Link as Anchor, useLocation } from 'react-router-dom';
import MainHeader from '../../layouts/MainHeader/MainHeader';
import Footer from '../../layouts/MainFooter/Footer';
import Itinerary from '../Itinerary/Itinerary';

const CityCard = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const imageUrl = queryParams.get('imageUrl');
  const cityName = location.state?.cityName || 'City Name' ;
  const itineraries = location.state?.itineraries || [];
  return (
    <>
    <MainHeader/>
    <div className="bg-gray-200 py-8 px-4 md:px-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">{cityName}</h2>
        {imageUrl && <img src={decodeURIComponent(imageUrl)} alt="City" className="w-full mb-4 rounded-lg" />}
        {/*sección de itinerarios */}
        <div className="itineraries">
            <h3 className="text-xl font-semibold mb-2">Itineraries</h3>
            {itineraries.map((itinerary, index) => (
              <Itinerary key={index} itinerary={itinerary} />
            ))}
          </div>
          {/* Fin de la sección  */}
        <p className="mb-4">Under construction</p>
        <Anchor
          to="/cities"
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back to Cities
        </Anchor>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CityCard;
