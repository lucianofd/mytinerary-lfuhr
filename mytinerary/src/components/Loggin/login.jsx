import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleImageClick = () => {
    setShowSignIn(true);
  };

  return (
    <div className="cursor-pointer">
      <div onClick={handleImageClick}>
        <img className="w-8 h-8 rounded-full" src="generic-user.jpg" alt="User Avatar" />
      </div>
      {showSignIn && (
        <div className="bg-white border p-2 absolute mt-2">
          <p>Sign In</p>
          <Link to="#">Go to Login</Link>
        </div>
      )}
    </div>
  );
};

export default Login;
