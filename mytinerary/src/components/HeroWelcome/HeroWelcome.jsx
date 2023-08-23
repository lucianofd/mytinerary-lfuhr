import React from 'react';
import { Link as Anchor} from 'react-router-dom';

const HeroWelcome = () => {
  return (
    <>
      {/* Hero/Welcome section */}
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">MyTinerary</h1>
        <p className="text-gray-600 text-lg mb-8">
          Find your perfect trip, designed by insiders who know and love their cities!
        </p>
        {/* Call to Action */}
        <div className="mt-4">
          <Anchor to="/cities" className="px-6 py-3 bg-blue-500 text-white rounded-lg font-bold shadow-lg">
            Explore Cities
          </Anchor>
        </div>
      </section>
    </>
  );
};

export default HeroWelcome;
