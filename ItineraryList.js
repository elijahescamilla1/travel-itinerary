import React, { useState, useEffect } from 'react';

function ItineraryList() {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    fetch('/itineraries')
      .then(response => response.json())
      .then(data => setItineraries(data));
  }, []);

  return (
    <div>
      <h2>Itineraries</h2>
      <ul>
        {itineraries.map(itinerary => (
          <li key={itinerary.id}>
            {itinerary.name} - {itinerary.destination}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItineraryList;
