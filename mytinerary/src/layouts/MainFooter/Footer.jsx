import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto text-center text-gray-600">
        <h2 className="text-2xl font-bold mb-4">Footer Title</h2>
        {/* Menú de navegación*/}
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500 font-bold hover:underline">
            Option 1
          </a>
          {/* Agrega más opciones de menú */}
        </div>
      </div>

      {/* Información diversa */}
      <div className="container mx-auto mt-8 flex justify-center space-x-4">
        {/* Agrega información adicional , redes sociales, mapa, etc. */}
        <p>Dirección: Calle 123, Ciudad, País</p>
        {/* Agrega más información*/}
      </div>
    </footer>
  );
};

export default Footer;
