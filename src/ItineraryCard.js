import React from 'react';

function ItineraryCard({ image, title, description }) {
  return (
    <div className="itinerary-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ItineraryCard;
