import React from 'react';
import { useSelector } from 'react-redux';

const Itinerary = () => {
  const itinerary = useSelector((state) => state.itinerary.itinerary);

  return (
    <div>
      <h2>Your Itinerary</h2>
      <ul>
        {itinerary.map((dest, index) => (
          <li key={index}>{dest.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Itinerary;