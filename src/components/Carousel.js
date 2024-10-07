import React from 'react';


const Carousel = ({ destinations }) => {
  return (
    <div className="carousel">
      {destinations.map((dest, index) => (
        <div key={index} className="carousel-item">
          <h3>{dest.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Carousel;