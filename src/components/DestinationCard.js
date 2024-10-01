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
      <button onClick={handleFavorite}>Add to Favorites</button>
    </div>
  );
};

export default DestinationCard;