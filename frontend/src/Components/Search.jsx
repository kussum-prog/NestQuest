import React, { useState, useEffect } from 'react';

const Search = () => {
  const [location, setLocation] = useState('');
  const [rooms, setRooms] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(`/api/rooms?location=${location}`);
    const data = await res.json();
    setRooms(data);
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        placeholder="Enter a location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {rooms.length ? (
          rooms.map((room) => (
            <div key={room._id}>
              <h3>{room.title}</h3>
              <p>{room.location}</p>
            </div>
          ))
        ) : (
          <p>No rooms found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
