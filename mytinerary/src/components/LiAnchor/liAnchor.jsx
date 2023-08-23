import React from 'react';
import { Link as Anchor } from 'react-router-dom';

const linkEs = [
  { key: '1', to: '/', content: 'Home' },
  { key: '2', to: '/cities', content: 'Cities' },
  { key: '3', to: '#', content: 'About' },
];

const LiAnchor = ({ customStyle }) => {
  const containerClasses = customStyle === 'footer-li-anchor' ? 'flex flex-col space-y-2' : 'flex space-x-4 bg-skayblue-500';
  
  return (
    <ul className={`text-black ${containerClasses}`}>
      {linkEs.map((item) => (
        <li key={item.key} className="cursor-pointer">
          <Anchor to={item.to} className={customStyle === 'footer-li-anchor' ? 'text-blue-500 hover:underline' : 'text-white'}>
            {item.content}
          </Anchor>
        </li>
      ))}
    </ul>
  );
};

export default LiAnchor;


