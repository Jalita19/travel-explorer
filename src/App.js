// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import SearchBar from './components/SearchBar';
import DestinationCard from './components/DestinationCard'; // A component to display each destination
import './styles.css';

const App = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResults = (data) => {
    setIsLoading(false);
    if (data && data.length > 0) {
      setResults(data);
      setError('');
    } else {
      setResults([]);
      setError('No destinations found. Please try another search.');
    }
  };

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Travel Explorer</h1>
        <SearchBar onResults={handleResults} setIsLoading={setIsLoading} />
        {isLoading && <p className="loading-message">Loading results...</p>}
        {error && <p className="error-message">{error}</p>}
        <div className="destination-list">
          {results.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </div>
    </Provider>
  );
};

export default App;