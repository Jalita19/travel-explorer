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