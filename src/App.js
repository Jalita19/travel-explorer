import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import SearchBar from './components/SearchBar';
import DestinationCard from './components/DestinationCard';
import Itinerary from './components/Itinerary';
import Carousel from './components/Carousel';
import './styles.css';

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Travel Explorer</h1>
        <SearchBar onResults={setResults} />
        <Carousel destinations={results} />
        <div className="destination-list">
          {results.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
        <Itinerary />
      </div>
    </Provider>
  );
};

export default App;
