import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const response = await axios.get(`https://`);
    onResults(response.data);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for destinations..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;