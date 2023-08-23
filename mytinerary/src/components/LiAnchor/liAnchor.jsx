import React from 'react';
import { Link as Anchor } from 'react-router-dom';

const linkEs = [
  { key: '1', to: '/', content: 'Home' },
  { key: '2', to: '/cities', content: 'Cities' },
  { key: '3', to: '#', content: 'About' },
];

const LiAnchor = () => {
  return (
    <ul className="flex space-x-4 bg-skayblue-500">
      {linkEs.map((item) => (
        <li key={item.key} className="cursor-pointer">
          <Anchor to={item.to} className="text-white">
            {item.content}
          </Anchor>
        </li>
      ))}
    </ul>
  );
};

export default LiAnchor;


