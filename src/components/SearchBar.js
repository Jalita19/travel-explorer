// SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onResults }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        console.log('Searching for:', query); // Log the search query
        try {
            const response = await axios.get('https://compare-flight-prices.p.rapidapi.com/GetPricesAPI/GetPrices.aspx', {
                headers: {
                    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
                    'x-rapidapi-host': 'compare-flight-prices.p.rapidapi.com'
                },
                params: {
                    q: query, // Add any additional required parameters
                }
            });
            console.log('API Response:', response.data); // Log the response data
            onResults(response.data);
        } catch (error) {
            console.error("API request failed:", error);
            if (error.response) {
                console.error(`Response: ${error.response.status} - ${error.response.data}`);
            } else {
                console.error("Error message:", error.message);
            }
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;