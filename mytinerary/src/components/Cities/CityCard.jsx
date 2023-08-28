import React from "react";
import { Link as Anchor } from "react-router-dom";
import Cities from "./Cities";

const CityCard = (props) => {
    
  console.log(props);
  

    const cityName = props.match.params.name;
    const imageUrl = props.location.state?.imageUrl;
  
    return (
        <div className="bg-gray-200 py-8 px-4 md:px-8">
          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{cityName}</h2>
            <img src={imageUrl} alt={cityName} className="w-full mb-4 rounded-lg" />
            <p className="mb-4">Under construction</p>
            <Anchor
              to="/cities"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Back to Cities
            </Anchor>
          </div>
        </div>
      );
  };
  
  export default CityCard;
  