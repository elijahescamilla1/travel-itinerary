import React, { useState } from 'react';

function AddItinerary() {
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAddItinerary = () => {
    fetch('/itineraries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, destination, start_date: startDate, end_date: endDate })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Itinerary added:', data);
      });
  };

  return (
    <div>
      <h2>Add Itinerary</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Destination"
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={handleAddItinerary}>Add Itinerary</button>
    </div>
  );
}

export default AddItinerary;
