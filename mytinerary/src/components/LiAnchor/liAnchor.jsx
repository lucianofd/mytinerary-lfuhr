import React from 'react';

const linkEs = [
  { key: '1', to: '#', content: 'Home' },
  { key: '2', to: '#', content: 'Cities' },
  { key: '3', to: '#', content: 'Loggin' },
];

const LiAnchor = () => {
  return (
    <ul className="flex space-x-4 bg-orange-500">
      {linkEs.map((item) => (
        <li key={item.key} className="cursor-pointer">
          {item.content}
        </li>
      ))}
    </ul>
  );
};

export default LiAnchor;
