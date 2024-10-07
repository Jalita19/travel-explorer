import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../features/itinerarySlice';

const DestinationCard = ({ destination }) => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(addFavorite(destination));
  };

  return (
    <div className="destination-card">
      <h3>{destination.name}</h3>
      <p>{destination.description}</p>
      <button onClick={handleFavorite} aria-label={`Add ${destination.name} to favorites`}>
        <i className="fas fa-heart"></i> Add to Favorites
      </button>
    </div>
  );
};

export default DestinationCard;
// src/components/DestinationCard.js
import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <h2>{destination.name}</h2> {/* Adjust based on your API response structure */}
      <p>{destination.description || 'No description available.'}</p> {/* Example of additional data */}
      {/* Add any other relevant data fields you want to display */}
    </div>
  );
};

export default DestinationCard;