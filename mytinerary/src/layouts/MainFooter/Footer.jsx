import React from 'react';
import LiAnchor from '../../components/LiAnchor/liAnchor';
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto text-center text-gray-600">
        <h2 className="text-2xl font-bold mb-4">MyTinerary</h2>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500 font-bold hover:underline">
            Find Your destination
          </a>
          
        </div>
      </div>

      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p>Dirección: Calle 123, Ciudad, País</p>
          
          <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-500">
            <FaPhone /> +1 234-567-890
          </a>
          <a href="mailto:info@example.com" className="text-gray-600 hover:text-blue-500">
            <FaEnvelope /> info@example.com
          </a>
        </div>
        
        <div className="mt-8 md:mt-0">
          <LiAnchor customStyle="footer-li-anchor" />
        </div>
        
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


