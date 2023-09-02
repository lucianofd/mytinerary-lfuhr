import React, { useState } from 'react';

const Itinerary = ({ itinerary }) => {
  const [showDetails, setShowDetails] = useState(false);

  // visibilidad de la sección detalles
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="itinerary">
      <div className="itinerary-header">
        {/* foto y el nombre del autor */}
        <img src={itinerary.author.photo} alt={itinerary.author.name} />
        <h3>{itinerary.author.name}</h3>
      </div>
      <div className="itinerary-info">
        {/* precio visualmente con iconos */}
        <div className="price">
          {Array.from({ length: itinerary.price }).map((_, index) => (
            <img key={index} src="icono-precio.png" alt={`Precio ${index + 1}`} />
          ))}
        </div>
        <p>Duración: {itinerary.duration} horas</p>
        <p>Likes: {itinerary.likes}</p>
        {/* hashtags temáticos */}
        <div className="hashtags">
          {itinerary.hashtags.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>
      </div>
      {/* Botón "View More" para mostrar/ocultar sección actividades y comentarios */}
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'View More'}
      </button>
      {/* Sección de actividades y comentarios  */}
      {showDetails && (
        <div className="details">
          <p>Activities and comments (Under Construction)</p>
        </div>
      )}
    </div>
  );
};

export default Itinerary;
