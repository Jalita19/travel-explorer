// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onResults, setIsLoading }) => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!query.trim()) {
            alert('Please enter a search term.');
            return;
        }

        setLoading(true);
        setIsLoading(true);
        console.log('Searching for:', query);

        const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${encodeURIComponent(query)}`;;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'da67456831msh26f381b32e02e04p1d2f92jsn493beb5a63f7', // Replace with your actual API key
                'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('API Response:', data);

            // Check the structure of the response
            if (data.status) {
                const results = data.data; // Extract the data array
                if (results && results.length > 0) {
                    onResults(results);
                    setError('');
                } else {
                    setError('No destinations found. Please try another search.');
                    onResults([]);
                }
            } else {
                setError(data.message || 'An error occurred.'); // Handle API errors
                onResults([]);
            }
        } catch (error) {
            console.error("API request failed:", error);
            setError('An error occurred while fetching destinations.');
        } finally {
            setLoading(false);
            setIsLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                aria-label="Search destinations"
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
            </button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default SearchBar;